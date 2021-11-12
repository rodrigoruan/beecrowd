var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

const langs = lines
  .join(' ')
  .split(/\d/)
  .filter((v) => ![' ', ''].includes(v))
  .map((c) => c.trim());

langs.map((x) => {
  const lg = [...new Set(x.split(' '))];
  console.log(lg.length > 1 ? 'ingles' : lg[0]);
});
