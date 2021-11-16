var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [a, b] = lines[0].split(' ').map(Number);

let x = 0;

let arr = [];

for (let i = 1; i <= b + 1; i += 1, x += 1) {
  if (x === a) {
    console.log(arr.join(' '));
    arr = [];
    x = 0;
  }
  arr.push(i);
}
