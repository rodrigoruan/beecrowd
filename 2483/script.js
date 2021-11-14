var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const number = Number(lines[0])

console.log(`Feliz nat${'a'.repeat(number)}l!`)