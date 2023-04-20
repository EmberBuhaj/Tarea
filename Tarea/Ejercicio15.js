let num1 = parseInt(prompt("Introduce el primer numero:"));
let num2 = parseInt(prompt("Introduce el segundo numero:"));

let contador = 0;
let pares = 0;
let suma_impares = 0;

if (num1 <= num2) {
  for (let i = num1; i <= num2; i++) {
    console.log(i);
    contador++;

    if (i % 2 == 0) {
      pares++;
    } else {
      suma_impares += i;
    }
  }
} else {
  for (let i = num2; i <= num1; i++) {
    console.log(i);
    contador++;

    if (i % 2 == 0) {
      pares++;
    } else {
      suma_impares += i;
    }
  }
}

console.log(`Hay un total de ${contador} numeros naturales entre ${num1} y ${num2}.`);
console.log(`De ellos, ${pares} son pares y ${contador - pares} son impares.`);
console.log(`La suma de los impares es ${suma_impares}.`);
