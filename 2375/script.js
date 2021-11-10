var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const d = Number(lines[0]);
const box = lines[1].split(' ').map(Number);

const result = box.every((num) => d <= num) ? 'S' : 'N';

console.log(result);
