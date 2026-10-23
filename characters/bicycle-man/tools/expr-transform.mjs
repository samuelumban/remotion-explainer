// Ekspresi After Effects = JavaScript + aritmetika vektor ([1,2]-[0,1]) + "nilai terakhir = hasil".
// Fungsi ini menulis ulang ekspresi (via AST TypeScript) menjadi JS biasa:
//   a + b  ->  $a(a,b)     a - b -> $s(a,b)     a * b -> $m(a,b)     a / b -> $d(a,b)    -x -> $n(x)
//   x += y ->  x = $a(x,y)
//   statement ekspresi terakhir  ->  return <ekspresi>
import { createRequire } from 'node:module';
import path from 'node:path';
let ts;
try { ts = createRequire(import.meta.url)('typescript'); }
catch { ts = createRequire(path.join(process.env.NPM_GLOBAL || '/home/claude/.npm-global/lib/node_modules/', 'x.js'))('typescript'); }

const OPS = { '+': '$a', '-': '$s', '*': '$m', '/': '$d' };
export function transformExpression(src) {
  const sf = ts.createSourceFile('e.js', src, ts.ScriptTarget.ES2020, true, ts.ScriptKind.JS);
  const text = n => src.slice(n.getStart(sf), n.end);
  function emit(n) {
    if (ts.isBinaryExpression(n)) {
      const k = n.operatorToken.kind, L = emit(n.left), R = emit(n.right);
      const map = { [ts.SyntaxKind.PlusToken]: '+', [ts.SyntaxKind.MinusToken]: '-', [ts.SyntaxKind.AsteriskToken]: '*', [ts.SyntaxKind.SlashToken]: '/' };
      const cmap = { [ts.SyntaxKind.PlusEqualsToken]: '+', [ts.SyntaxKind.MinusEqualsToken]: '-', [ts.SyntaxKind.AsteriskEqualsToken]: '*', [ts.SyntaxKind.SlashEqualsToken]: '/' };
      if (map[k]) return `${OPS[map[k]]}(${L},${R})`;
      if (cmap[k]) return `(${L} = ${OPS[cmap[k]]}(${L},${R}))`;
      return `${L} ${n.operatorToken.getText(sf)} ${R}`;
    }
    if (ts.isPrefixUnaryExpression(n) && n.operator === ts.SyntaxKind.MinusToken) return `$n(${emit(n.operand)})`;
    if (ts.isParenthesizedExpression(n)) return `(${emit(n.expression)})`;
    // generik: salin teks, ganti anak-anak yang berubah
    const kids = n.getChildren(sf);
    if (!kids.length) return n.getText(sf);
    let out = '', pos = n.getStart(sf);
    for (const c of kids) {
      out += src.slice(pos, c.getStart(sf)) + emit(c);
      pos = c.end;
    }
    return out + src.slice(pos, n.end);
  }
  // statement top-level
  const stmts = sf.statements;
  let out = '';
  stmts.forEach((s, i) => {
    const last = i === stmts.length - 1;
    const lead = src.slice(i ? stmts[i - 1].end : 0, s.getStart(sf));
    if (last && ts.isExpressionStatement(s)) out += lead + 'return (' + emit(s.expression) + ');';
    else out += lead + emit(s);
  });
  return out;
}
