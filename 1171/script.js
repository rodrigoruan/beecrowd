var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const n = Number(lines[0]);

const obj = {};

for (let i = 1; i <= n; i += 1) {
  const a = Number(lines[i]);

  obj[a] ? obj[a]++ : (obj[a] = 1);
}

Object.entries(obj)
  .sort((a, b) => +a[0] - +b[0])
  .forEach((v) => console.log(`${v[0]} aparece ${v[1]} vez(es)`));
