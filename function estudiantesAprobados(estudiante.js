function estudiantesAprobados(estudiantes) {
    return estudiantes.filter(estudiante => estudiante.nota >= 60);
  }
  
  // Ejemplo:
  const alumnos = [
    { nombre: "Ana", nota: 85 },
    { nombre: "Luis", nota: 45 },
    { nombre: "Carla", nota: 70 }
  ];
  console.log(estudiantesAprobados(alumnos));
  // [{ nombre: "Ana", nota: 85 }, { nombre: "Carla", nota: 70 }]
  