var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

// for (let i = 1; i <= +lines[0]; i += 1) {
//   const result = +lines[i].match(/(?<=\=\s)\d+/)[0];
//   const eq = lines[i]
//     .match(/.+(?=\s=)/)[0]
//     .replace(/\s/g, '')
//     .replace(/x/g, '*');
//   const rs = Math.abs(eval(eq) - +result); // OBS: não usar eval (porque Rodrigo? má prática xD)
//   console.log(`E${'r'.repeat(rs)}ou!`);
// }

const numbersOfInputs = Number(lines[0]);

for (let i = 1; i <= numbersOfInputs; i += 1) {
  const infos = lines[i].split(' ');
  const n1 = Number(infos[0]);
  const n2 = Number(infos[2]);
  let result = 0;

  if (infos[1] === 'x') result = n1 * n2;
  if (infos[1] === '+') result = n1 + n2;
  if (infos[1] === '-') result = n1 - n2;

  const totalRs = Math.abs(result - Number(infos[4]));

  console.log(`E${'r'.repeat(totalRs)}ou!`);
}
