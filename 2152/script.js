var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const n = Number(lines[0]);

for (let i = 1; i <= n; i += 1) {
  let [h, m, o] = lines[i].split(' ').map(Number);

  if (!/^\d{2}$/.test(h)) h = '0' + h;
  if (!/^\d{2}$/.test(m)) m = '0' + m;

  if(o === 1) {
    console.log(`${h}:${m} - A porta abriu!`)
  } else {
    console.log(`${h}:${m} - A porta fechou!`)
  }
}
