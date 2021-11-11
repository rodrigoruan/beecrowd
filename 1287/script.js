// var input = require('fs').readFileSync('stdin', 'utf8');
// var lines = input.split('\n');

// lines.map((v) => {
//   const n = v
//     .replace(/l/g, '1')
//     .replace(/o/gi, '0')
//     .replace(/[^0-9]/g, '')
//     .replace(/^0+(?=[^0])/, '')

//   if(!n || n > 2147483647) console.log('error')
//   else if (/^0+$/.test(n)) console.log('0')
//   else console.log(n)
// });


class Banco {
  constructor(money) {
    this.money = money;
  }
  verDinheiro() {
    return this.money;
  }
  retirarDinheiro(money) {
    return this.money -= money;
  }
  adicionarDinheiro(money) {
    return this.money += money; 
  }
}

const banco = new Banco(10)

console.log(banco.verDinheiro())
console.log(banco.retirarDinheiro(3))