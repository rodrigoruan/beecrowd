var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const n = Number(lines[0]);

if(n >= 86) console.log('A')
else if(n >= 61) console.log('B')
else if(n >= 36) console.log('C')
else if(n >= 1) console.log('D')
else console.log('E')
