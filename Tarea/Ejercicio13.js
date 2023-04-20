let count = 0;

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    console.log(i);
    count++;
  }
}

console.log(`Tiene ${count} numeros que son multiplos de 2 o de 3.`);
