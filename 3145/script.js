var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [n, x] = lines[0].split(' ').map(Number);

console.log((x / (n + 2)).toFixed(2));
