var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

for (let i = 0; lines[i]; i += 1) {
  const n = Number(lines[i]);
  if (n <= 0) console.log(`X[${i}] = ${1}`);
  else console.log(`X[${i}] = ${n}`);
}
