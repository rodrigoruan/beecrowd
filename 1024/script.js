var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

lines.slice(1, lines.length).map((v, i) => {
  if(i >= lines[0]) return;
  const x = v.replace(/[a-zA-Z]/g, c => {
    const isLower = c.toLowerCase() === c;
    const y = String.fromCharCode(c.charCodeAt() + 3);
    return isLower ? y.toLowerCase() : y.toUpperCase();
  }).split('').reverse().join('')

  const mid = Math.floor(x.length / 2);

  const w = x.split('').map((v, i) => {
    if(i >= mid) {
      return String.fromCharCode(v.charCodeAt() - 1);
    }
    return v;
  }).join('')

  console.log(w);
})