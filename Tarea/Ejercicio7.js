const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let contador = 0;

rl.on('line', (line) => {
  if (line) {
    contador++;
  } else {
    console.log(`Se contaron ${contador} frases.`);
    process.exit();
  }
});
