var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const n = Number(lines[0])

const result = (((1+Math.sqrt(5))/2)**n - ((1+Math.sqrt(5))/2)**n) / Math.sqrt(5)

console.log(result)