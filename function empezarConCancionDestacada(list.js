function empezarConCancionDestacada(listaReproduccion) {
    const cancionRemovida = listaReproduccion.shift();
    console.log("Canción removida:", cancionRemovida);
    console.log("Lista de reproducción actualizada:", listaReproduccion);
  }
  
  // Ejemplo:
  let playlist = ["Canción vieja", "Canción 2", "Canción 3"];
  empezarConCancionDestacada(playlist);
  