var input = require('fs').readFileSync('stdin', 'utf8');

const lines = input.split('\n');

lines.forEach(v => {
  const [a, b] = v.split(' ').map(Number);
  console.log(a^b);
})