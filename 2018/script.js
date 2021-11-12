var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let response = '';

lines.map((num) => {
  if (num === '0') {
    console.log('');
    console.log(`The biggest word: ${response}`);
  } else {
    const arr = num.split(' ').map((v) => v.length);
    const highest = Math.max(...arr);
    const filteredPhrases = num.split(' ').filter((x) => x.length === highest);

    if (highest >= response.length) {
      response = filteredPhrases[filteredPhrases.length - 1];
    }

    console.log(arr.join('-'));
  }
});
