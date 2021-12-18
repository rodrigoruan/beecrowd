var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

lines.forEach(v => {
  if(v == "") break;
  let x = v.replace(/[^\(\)]/g, '');

  while(x.match(/\(\)/)) {
    x = x.replace(/\(\)/, "");
  }
  console.log(x.length === 0 ? "correct" : "incorrect");
})