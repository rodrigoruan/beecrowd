var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let [ab, act] = lines[0].split(' ').map(Number)

for(let i = 1; i <= act; i += 1) {
  const actual = lines[i]

  if(actual === 'fechou') ab++;
  else ab--;
}

console.log(ab)