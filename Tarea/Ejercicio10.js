const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Introduce un numero: ', (numero) => {
  if (numero % 2 === 0) {
    console.log('El numero es par.');
  } else {
    console.log('El numero es impar.');
  }

  rl.close();
});
