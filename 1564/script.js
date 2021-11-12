var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

for (let i = 0; lines[i]; i += 1) {
  if (Number(lines[i]) === 0) console.log('vai ter copa!');
  else console.log('vai ter duas!');
}
