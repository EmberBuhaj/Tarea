let sumaPares = 0;
let sumaImpares = 0;

for (let i = 1; i <= 100; i++) {
  console.log(i);

  if (i % 2 === 0) {
    sumaPares += i;
  } else {
    sumaImpares += i;
  }
}

console.log(`La suma de los numeros pares es ${sumaPares}.`);
console.log(`La suma de los numeros impares es ${sumaImpares}.`);
