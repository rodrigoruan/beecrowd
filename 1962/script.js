var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const n = Number(lines[0])

for(let i = 1; i <= n; i += 1) {
  const actual = Number(lines[i])
  const res = actual - 2015

  if(res >= 0) console.log(`${res+1} A.C.`)
  else console.log(`${Math.abs(res)} D.C.`)
}