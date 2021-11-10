var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const years = lines[0].split(' ').map(Number);
const sortedYears = years.sort((a, b) => a - b);
const a = sortedYears[0];
const b = sortedYears[1];
const c = sortedYears[2];

if ([a - b, b - c, c - a].includes(0)) console.log('S');
else if ([a + b - c, b + c - a, c + a - b].includes(0)) console.log('S');
else console.log('N');
