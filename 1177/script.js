var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const n = Number(lines[0]);
let x = 0;

for (let i = 0; i < 1000; i += 1, x += 1) {
  if (x === n) x = 0;
  console.log(`N[${i}] = ${x}`);
}
