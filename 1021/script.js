var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let n = Number(lines[0]);

const obj = {
  100.0: 0,
  50.0: 0,
  20.0: 0,
  10.0: 0,
  5.0: 0,
  2.0: 0,
  1.0: 0,
  0.5: 0,
  0.25: 0,
  0.1: 0,
  0.05: 0,
  0.01: 0,
};

const keys = Object.keys(obj).sort((a, b) => b - a);

let i = 0;

while (n > 0) {
  if (keys[i] > n) {
    i += 1;
  } else {
    n = Number((n - keys[i]).toFixed(2));
    obj[keys[i]]++;
  }
}

const arrOfCoins = Object.entries(obj)
  .sort((a, b) => b[0] - a[0])
  .reduce((acc, curr) => {
    let message;
    if (Number(curr[0]) <= 1.0) {
      message = `${curr[1]} moeda(s) de R$ ${Number(curr[0]).toFixed(2)}`;
    } else {
      message = `${curr[1]} nota(s) de R$ ${Number(curr[0]).toFixed(2)}`;
    }
    return [...acc, message];
  }, []);

console.log('NOTAS:');

arrOfCoins.forEach((v) => {
  if (v.includes('R$ 1.00')) console.log('MOEDAS:');
  console.log(v);
});
