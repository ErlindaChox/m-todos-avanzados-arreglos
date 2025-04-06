function priorizarTarea(tareas, tareaImportante) {
    tareas.unshift(tareaImportante);
    console.log(tareas);
  }
  
  // Ejemplo:
  let tareasPendientes = ["Hacer la cama", "Lavar platos"];
  priorizarTarea(tareasPendientes, "Terminar proyecto");
  