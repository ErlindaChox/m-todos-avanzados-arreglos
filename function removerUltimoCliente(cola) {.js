function removerUltimoCliente(cola) {
    const clienteRemovido = cola.pop();
    console.log("Cliente removido:", clienteRemovido);
    console.log("Cola actualizada:", cola);
  }
  
  // Ejemplo:
  let colaClientes = ["Cliente1", "Cliente2", "Cliente3"];
  removerUltimoCliente(colaClientes);
  