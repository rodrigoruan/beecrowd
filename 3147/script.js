var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const [h, e, a, o, w, x] = lines[0].split(' ').map(Number);

const bem = h + e + a + x;
const mal = o + w;

if (bem >= mal) {
  console.log('Middle-earth is safe.');
} else {
  console.log('Sauron has returned.');
}
