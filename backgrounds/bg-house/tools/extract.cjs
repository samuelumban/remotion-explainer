// Mock runtime After Effects ExtendScript -> merekam seluruh pohon properti sebagai JSON
const fs = require('fs'), vm = require('vm');
let src = fs.readFileSync(require('path').join(__dirname,'..','source',fs.readdirSync(require('path').join(__dirname,'..','source')).find(f=>f.endsWith('.jsx'))),'utf8').replace(/\r/g,'').replace(/e\.line\.toString\(\)/,'e.stack');
src += '\n' + src.match(/function (compCode_\w+)/)[1] + '();\n';

const PRESET = {
  'ADBE Vector Group': () => [leaf('ADBE Vector Blend Mode'), cont('ADBE Vectors Group'), cont('ADBE Vector Transform Group')],
  'ADBE Vector Filter - Repeater': () => [leaf('ADBE Vector Repeater Copies'), leaf('ADBE Vector Repeater Offset'), leaf('ADBE Vector Repeater Order'), cont('ADBE Vector Repeater Transform')],
  'ADBE Vector Filter - Trim': () => [leaf('ADBE Vector Trim Start'), leaf('ADBE Vector Trim End'), leaf('ADBE Vector Trim Offset'), leaf('ADBE Vector Trim Type')],
  'ADBE Vector Filter - RC': () => [leaf('ADBE Vector RoundCorner Radius')],
  'ADBE Vector Shape - Rect': () => [leaf('ADBE Vector Shape Direction'), leaf('ADBE Vector Rect Size'), leaf('ADBE Vector Rect Position'), leaf('ADBE Vector Rect Roundness')],
  'ADBE Vector Shape - Ellipse': () => [leaf('ADBE Vector Shape Direction'), leaf('ADBE Vector Ellipse Size'), leaf('ADBE Vector Ellipse Position')],
  'ADBE Vector Shape - Group': () => [leaf('ADBE Vector Shape Direction'), leaf('ADBE Vector Shape')],
};
class P {
  constructor(mn){ this.matchName = mn; this.name = null; this.enabled = true; this.children = []; this.value = undefined; this.hasValue = false; }
  property(k){
    if (typeof k === 'number') { const c = this.children[k-1]; if(!c) throw new Error('no child #'+k+' in '+this.matchName+' ('+this.children.length+')'); return c; }
    let c = this.children.find(x => x.matchName === k);
    if (!c) { c = new P(k); this.children.push(c); }
    return c;
  }
  addProperty(mn){ const p = new P(mn); if (PRESET[mn]) p.children = PRESET[mn](); this.children.push(p); return p; }
  setValue(v){ this.value = v; this.hasValue = true; }
  get numProperties(){ return this.children.length; }
}
const leaf = mn => new P(mn), cont = mn => new P(mn);

class Shape { constructor(){ this.vertices=[]; this.inTangents=[]; this.outTangents=[]; this.closed=true; } }
class Layer extends P {
  constructor(kind, comp, src){ super('Layer'); this.kind = kind; this.comp = comp; this.source = src||null;
    this.shy=false; this.blendingMode='NORMAL'; this.collapseTransformation=false; this.trackMatteType='NO_TRACK_MATTE';
    this.layerEnabled = true; this.outPoint = null; this.locked=false; this.selected=false; this.label=0; }
  replaceSource(){}
  setParentWithJump(p){ this.parentLayer = p; }
  moveToEnd(){ const L = this.comp.layerList; L.splice(L.indexOf(this),1); L.push(this); }
  remove(){ const L=this.comp.layerList; const i=L.indexOf(this); if(i>=0)L.splice(i,1); }
}
// Layer.enabled harus dibedakan dari Prop.enabled -> pakai accessor
Object.defineProperty(Layer.prototype,'enabled',{ get(){return this.layerEnabled}, set(v){this.layerEnabled=v} });

const comps = [];
function Comp(name,w,h,pa,dur,fps){
  const c = { name, width:w, height:h, duration:dur, frameRate:fps, layerList:[], bgColor:[0,0,0] };
  c.layers = {
    addShape(){ const l=new Layer('shape',c); c.layerList.unshift(l); return l; },
    addNull(){ const l=new Layer('null',c); c.layerList.unshift(l); l.source={mainSource:{}, remove(){}, parentFolder:{numItems:1, remove(){}} }; return l; },
    add(item){ const l=new Layer('precomp',c,item.name); c.layerList.unshift(l); l.srcComp=item; return l; },
  };
  c.openInViewer=()=>{};
  c.remove=()=>{ const i=comps.indexOf(c); if(i>=0) comps.splice(i,1); };
  comps.push(c); return c;
}
const folder = () => ({ items:[], addFolder(){return folder();} });
const root = folder();
const sandbox = {
  app:{ beginUndoGroup(){}, endUndoGroup(){}, project:{ rootFolder:root, items:{ addFolder:()=>folder(), addComp:Comp } } },
  Shape, FolderItem: function(){}, 
  BlendingMode:{ADD:'ADD',OVERLAY:'OVERLAY',NORMAL:'NORMAL'}, MaskMode:{SUBTRACT:'SUBTRACT',INTERSECT:'INTERSECT',ADD:'ADD',NONE:'NONE'},
  TrackMatteType:{ALPHA:'ALPHA',NO_TRACK_MATTE:'NO_TRACK_MATTE'}, alert:(m)=>{console.error('ALERT:',m); process.exit(1)}, File:{decode:s=>String(s)}, console,
};
vm.runInNewContext(src, sandbox);

// ---- serialisasi ----
const ser = v => v instanceof Shape ? {vertices:v.vertices, inTangents:v.inTangents, outTangents:v.outTangents, closed:v.closed} : v;
function node(p){
  const o = { m:p.matchName };
  if (p.name!==null) o.n=p.name;
  if (p.enabled===false) o.off=true;
  if (p.hasValue) o.v=ser(p.value);
  if (p.maskMode) o.maskMode=p.maskMode;
  if (p.children.length) o.c=p.children.map(node);
  return o;
}
const out = comps.map(c=>({
  name:c.name, width:c.width, height:c.height, duration:c.duration, fps:c.frameRate,
  layers:c.layerList.map(l=>({
    name:l.name||null, kind:l.kind, parent: l.parentLayer? c.layerList.indexOf(l.parentLayer):null, source:l.source, off:l.layerEnabled===false, shy:l.shy, blend:l.blendingMode,
    collapse:l.collapseTransformation, matte:l.trackMatteType, outPoint:l.outPoint, locked:l.locked,
    tree:l.children.map(node)
  }))
}));
fs.writeFileSync(require('path').join(__dirname,'ae.json'), JSON.stringify(out));
console.log(out.map(c=>c.name+' '+c.width+'x'+c.height+' layers='+c.layers.length).join('\n'));
