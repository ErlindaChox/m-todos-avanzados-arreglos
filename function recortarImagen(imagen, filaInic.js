function recortarImagen(imagen, filaInicio, filaFin, colInicio, colFin) {
    const seccionRecortada = imagen.slice(filaInicio, filaFin).map(fila => fila.slice(colInicio, colFin));
    console.log(seccionRecortada);
  }
  
  // Ejemplo:
  const imagen = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
  ];
  recortarImagen(imagen, 0, 2, 1, 3);
  // [[2, 3], [6, 7]]
  