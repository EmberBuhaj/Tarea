const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numero = 0;
let contador = 0;

rl.question('Introduce un numero: ', (entrada) => {
  numero = parseInt(entrada);

  for (let i = 1; i <= numero; i++) {
    if (i % 3 === 0) {
      console.log(i);
      contador++;
    }
  }

  console.log(`Tiene ${contador} multiplos de 3 entre 1 y ${numero}.`);

  rl.close();
});
