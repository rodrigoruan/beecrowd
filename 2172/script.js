var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

for(let i = 0; lines[i] !== '0 0'; i += 1) {
  const [a, b] = lines[i].split(' ').map(Number)
  console.log(b * a)
}