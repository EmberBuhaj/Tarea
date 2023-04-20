const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function pedirRespuesta() {
  let respuesta;

  rl.on('line', (line) => {
    respuesta = line.toUpperCase();

    if (respuesta === 'S' || respuesta === 'N') {
      rl.close();
    } else {
      console.log('Introduce S o N:');
    }
  });

  rl.on('close', () => {
    console.log(`Tecleo la letra: ${respuesta}.`);
  });
}

pedirRespuesta();
