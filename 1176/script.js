var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const n = Number(lines[0]);

const arr = [0, 1];

for (let i = 1; i <= n; i += 1) {
  const a = Number(lines[i]);

  if (arr.length <= a) {
    while (arr.length <= a) {
      arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    }
  }

  if (a === 0) console.log(`Fib(0) = 0`);
  else console.log(`Fib(${a}) = ${arr[a]}`);
}
