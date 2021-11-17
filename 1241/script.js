var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const n = Number(lines[0]);

for (let i = 1; i <= n; i += 1) {
  const [a, b] = lines[i].split(' ');

  console.log(a.endsWith(b) ? 'encaixa' : 'nao encaixa');
}
