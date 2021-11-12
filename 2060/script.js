var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

function verifyMultiples(n, nM) {
  return n % nM === 0;
}

const arr = lines[1].split(' ').map(Number);

let na = [];

for (let i = 5; i >= 2; i -= 1) {
  na.push(arr.filter((x) => verifyMultiples(x, i)));
}

na = na.reverse();

for (let i = 2; i <= 5; i += 1) {
  console.log(`${na[i - 2].length} Multiplo(s) de ${i}`);
}
