//Ejercicio 5: Gestion de tareas pendientes
// Arreglo donde se guardarán todas las tareas
const tareas = [];

// Función para agregar una nueva tarea
function agregarTarea(descripcion) {
  tareas.push({
    descripcion: descripcion,
    completada: false
  });

  console.log(`Tarea agregada: ${descripcion}`);
}

// Función para marcar una tarea como completada
function marcarTareaComoCompletada(descripcion) {

  // Buscamos la tarea por su descripción
  const tarea = tareas.find(t => t.descripcion === descripcion);

  if (tarea) {
    tarea.completada = true;
    console.log(`Tarea completada: ${descripcion}`);
  } else {
    console.log("No se encontró la tarea.");
  }
}

// Función para mostrar las tareas pendientes
function listarTareasPendientes() {
  const pendientes = tareas.filter(t => !t.completada);

  console.log("\nTareas pendientes:");
  pendientes.forEach(t => console.log("- " + t.descripcion));
}

// Función para mostrar las tareas completadas
function listarTareasCompletadas() {
  const completadas = tareas.filter(t => t.completada);

  console.log("\nTareas completadas:");
  completadas.forEach(t => console.log("- " + t.descripcion));
}

// Agregamos algunas tareas de ejemplo
agregarTarea("Comprar leche");
agregarTarea("Llamar al médico");
agregarTarea("Estudiar JavaScript");

// Marcamos una tarea como completada
marcarTareaComoCompletada("Comprar leche");

// Mostramos las tareas pendientes y completadas
listarTareasPendientes();
listarTareasCompletadas();