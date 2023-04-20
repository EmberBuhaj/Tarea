let numeros = [];

for (let i = 0; i < 5; i++) {
  let num = parseInt(prompt("Introduce un numero:"));
  numeros.push(num);
}

let mayor = Math.max(...numeros);
let menor = Math.min(...numeros);

console.log(`rl mayor numero es ${mayor} y el menor numero es ${menor}.`);
