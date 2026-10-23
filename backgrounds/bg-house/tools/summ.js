const d=require('./ae.json');
const t=(l,n)=>{const g=l.tree.find(x=>x.m==='ADBE Transform Group'); const p=g&&g.c&&g.c.find(x=>x.m===n); return p&&p.v};
const comp=process.argv[2]||'BG Garden';
const c=d.find(x=>x.name===comp);
c.layers.forEach((l,i)=>{
  const nGroups=(l.tree.find(x=>x.m==='ADBE Root Vectors Group')||{c:[]}).c.length;
  const masks=(l.tree.find(x=>x.m==='ADBE Mask Parade')||{c:[]}).c.length;
  console.log(String(i).padStart(2),l.kind.padEnd(7),(l.name||'').padEnd(18),'src='+(l.source||'-').toString().padEnd(13),
    l.off?'OFF ':'', l.parent!=null?'par='+l.parent+' ':'', l.blend!=='NORMAL'?l.blend+' ':'', l.matte!=='NO_TRACK_MATTE'?'MATTE ':'', l.collapse?'collapse ':'',
    'anc='+JSON.stringify(t(l,'ADBE Anchor Point')),'pos='+JSON.stringify(t(l,'ADBE Position')),'sc='+JSON.stringify(t(l,'ADBE Scale')),'rot='+t(l,'ADBE Rotate Z'),'op='+t(l,'ADBE Opacity'),
    nGroups?'groups='+nGroups:'',masks?'masks='+masks:'');
});
