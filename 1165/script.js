var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const n = Number(lines[0]);

function isPrime(n) {
  for (let i = 2; i < n; i += 1) if (n % i === 0) return false;
  return n > 1;
}

for (let i = 1; i <= n; i += 1) {
  const number = Number(lines[i]);
  const response = isPrime(number);

  console.log(response ? number + ' eh primo' : number + ' nao eh primo');
}
