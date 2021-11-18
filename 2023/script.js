var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const r = lines.sort((a, b) => b.localeCompare(a))[0]

console.log(r)