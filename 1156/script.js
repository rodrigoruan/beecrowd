let n = 1;

for (let i = 3, j = 2; i < 40; i += 2, j *= 2) {
  n += i / j;
}

console.log(n.toFixed(2));
