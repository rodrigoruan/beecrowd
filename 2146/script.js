var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

for (let i = 0; lines[i]; i += 1) {
  console.log(Number(lines[i]) - 1);
}

