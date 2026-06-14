//Ejercicio 2: Simulación de una Operacióbn Asíncrona con Promesasfunction consultarBaseDeDatos() {

function consultarBaseDeDatos() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const numero = Math.floor(Math.random() * 10) + 1;

      if (numero % 2 === 0) {
        resolve("Consulta exitosa");
      } else {
        reject("Error en la consulta");
      }
    }, 3000);
  });
}

consultarBaseDeDatos()
  .then(resultado => {
    console.log(resultado);
  })
  .catch(error => {
    console.log(error);
  });