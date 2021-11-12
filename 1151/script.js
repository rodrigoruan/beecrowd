var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const n = Number(lines[0]);

const arr = [0, 1];

for (let i = 2; arr.length < n; i += 1) {
  arr.push(arr[arr.length - 2] + arr[arr.length - 1]);
}

console.log(arr.slice(0, n).join(' '));
