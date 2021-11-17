var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [a, b, c] = lines[0].split(' ').map(Number);
const [a1, b1, c1] = lines[1].split(' ').map(Number);

const arr = [a - a1, b - b1, c - c1];

console.log(
  Math.abs(arr.filter((n) => n < 0).reduce((acc, curr) => acc + curr, 0))
);
