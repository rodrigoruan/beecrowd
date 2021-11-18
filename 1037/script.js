var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const n = Number(lines[0]);

let res = '';

if (n >= 0 && n <= 25) {
  res += '[0,25]';
} else if (n > 25 && n <= 50) {
  res += '(25,50]';
} else if (n > 50 && n <= 75) {
  res += '(50,75]';
} else if (n > 75 && n <= 100) {
  res += '(75,100]';
}

console.log(res ? `Intervalo ${res}` : 'Fora de intervalo');
