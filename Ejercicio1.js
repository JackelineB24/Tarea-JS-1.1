//Ejercicio numero 1: Consumo de una API y procesamiendo de datos
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => {
    users.forEach(user => {
      console.log(`Nombre: ${user.name}, Email: ${user.email}`);
    });
  })
  .catch(error => {
    console.error("Error al obtener los usuarios:", error);
  });