var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let n = Number(lines[0]);

for (let i = 0; i < 10; i += 1) {
  console.log(`N[${i}] = ${n}`);
  n *= 2;
}
