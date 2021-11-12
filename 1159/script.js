var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

for (let i = 0; lines[i] !== '0'; i += 1) {
  let number = Number(lines[i]);
  let result = 0;

  if (number % 2 !== 0) number += 1;

  for (let i = 0; i < 5; i += 1) {
    result += number;
    number += 2;
  }

  console.log(result);
}
