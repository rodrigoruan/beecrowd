var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

if(lines[0].length >= 10) {
  console.log('palavrao')
} else {
  console.log('palavrinha')
}