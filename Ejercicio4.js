//Ejercicio 4: Procesamiento de una lista de productos

// Lista de productos disponibles en la tienda
const productos = [
  { nombre: "Televisor", precio: 500, categoria: "Electrónica" },
  { nombre: "Silla", precio: 100, categoria: "Muebles" },
  { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
  { nombre: "Mesa", precio: 200, categoria: "Muebles" },
  { nombre: "Auriculares", precio: 150, categoria: "Electrónica" }
];

// Categoría que queremos buscar
const categoriaSeleccionada = "Electrónica";

// Filtramos únicamente los productos de la categoría seleccionada
const productosFiltrados = productos.filter(producto =>
  producto.categoria === categoriaSeleccionada
);

// Obtenemos un arreglo que contiene solo los nombres de los productos filtrados
const nombresProductos = productosFiltrados.map(producto =>
  producto.nombre
);

// Sumamos los precios de todos los productos filtrados
const precioTotal = productosFiltrados.reduce((total, producto) =>
  total + producto.precio, 0
);

// Mostramos los resultados en consola
console.log("Categoría seleccionada:", categoriaSeleccionada);
console.log("Productos encontrados:", productosFiltrados);
console.log("Nombres de los productos:", nombresProductos);
console.log("Precio total:", precioTotal);