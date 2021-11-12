var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const reversed = lines.reverse();

for (let i = 0; i < 20; i += 1) {
  console.log(`N[${i}] = ${reversed[i]}`);
}
