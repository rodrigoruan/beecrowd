var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const arr = [];

for (let i = 1; lines[i]; i += 2) {
  const n = lines[i];

  arr.push(n);
}

console.log(
  (arr.reduce((acc, curr) => acc + Number(curr), 0) / arr.length).toFixed(1)
);
