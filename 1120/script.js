var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

for (let i = 0; lines[i] !== '0 0'; i++) {
  const [d, n] = lines[i].split(' ');
  const reg = new RegExp(d, 'g');

  let res = n.replace(reg, '');

  res = res.replace(/^0+(?=[1-9])/, '')

  if (/^0+$/.test(res) || !res) res = '0';

  console.log(res);
}