var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const n = Number(lines[0]);

for (let i = 1; i <= n; i += 1) {
  let [x, y] = lines[i].split(' ').map(Number);
  let res = 0;

  for (let i = x; y !== 0; x += 1) {
    if (x % 2 !== 0) {
      y--;
      res += x;
    }
  }

  console.log(res);
}
