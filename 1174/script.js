var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

for (let i = 0; i < 100; i += 1) {
  if (Number(lines[i]) <= 10) {
    console.log(`A[${i}] = ${Number(lines[i]).toFixed(1)}`);
  }
}
