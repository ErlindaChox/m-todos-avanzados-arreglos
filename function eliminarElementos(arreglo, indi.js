function eliminarElementos(arreglo, indice, cantidad) {
    arreglo.splice(indice, cantidad);
    console.log(arreglo);
  }
  
  // Ejemplo:
  let numeros = [1, 2, 3, 4, 5];
  eliminarElementos(numeros, 1, 2);
  // [1, 4, 5]
  