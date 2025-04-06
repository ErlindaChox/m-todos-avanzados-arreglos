function agregarProducto(catalogo, nombre, precio) {
    catalogo.push({ nombre, precio });
    console.log(catalogo);
  }
  
  // Ejemplo:
  let catalogo = [];
  agregarProducto(catalogo, "Laptop", 1000);
  
  