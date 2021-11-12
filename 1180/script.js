var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const arr = lines[1].split(' ').map(Number);
const lowest = Math.min(...arr);

console.log(`Menor valor: ${lowest}`);
console.log(`Posicao: ${arr.indexOf(lowest)}`);
