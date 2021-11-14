var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const number = Number(lines[0]);

for (let i = 1; i <= number; i += 1) {
  console.log((lines[i].length * 0.01).toFixed(2));
}
