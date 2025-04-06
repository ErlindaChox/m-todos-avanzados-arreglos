function contarAprobados(estudiantes) {
    return estudiantes.reduce((total, estudiante) => {
      return estudiante.nota >= 60 ? total + 1 : total;
    }, 0);
  }
  
  // Ejemplo:
  console.log(contarAprobados(alumnos)); 
  // 2
  