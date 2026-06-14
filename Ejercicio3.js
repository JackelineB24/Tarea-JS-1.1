//Ejercicio 3: uso de async y await para manejar promesas

// Función que simula una consulta a una base de datos
function consultarBaseDeDatos() {
  return new Promise((resolve, reject) => {

    // Simulamos que la consulta tarda 3 segundos en responder
    setTimeout(() => {

      // Generamos un número aleatorio entre 1 y 10
      const numero = Math.floor(Math.random() * 10) + 1;

      // Si el número es par, la consulta fue exitosa
      if (numero % 2 === 0) {
        resolve("Consulta exitosa");
      } 
      // Si el número es impar, ocurrió un error
      else {
        reject("Error en la consulta");
      }

    }, 3000);
  });
}

// Función asíncrona que ejecuta la consulta
async function ejecutarConsulta() {
  try {

    // Esperamos el resultado de la promesa
    const resultado = await consultarBaseDeDatos();

    // Mostramos el mensaje de éxito
    console.log(resultado);

  } catch (error) {

    // Si ocurre un error, lo mostramos en consola
    console.log(error);

  }
}

// Llamamos a la función para iniciar el proceso
ejecutarConsulta();