var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const res = /zelda/i.test(lines[0]);

console.log(res ? 'Link Bolado' : 'Link Tranquilo');
