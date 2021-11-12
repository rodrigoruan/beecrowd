let n = 1;

for (let i = 2; i <= 100; i += 1) {
  n += 1 / i;
}

console.log(n.toFixed(2));
