function ordenarPorPrecio(productos) {
    productos.sort((a, b) => a.precio - b.precio);
    console.log(productos);
  }
  
  // Ejemplo:
  ordenarPorPrecio(productos);
  