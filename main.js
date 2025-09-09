import PeajeFondos from "./funcion.js";
const Peaje = new PeajeFondos();

const tipos = {
  "Automóvil": "autos",
  "Bus": "buses",
  "Camión": "camiones"
};

let peajeAbierto = false;

document.querySelectorAll(".vehiculos img").forEach(img => {
  img.addEventListener("click", () => {
    if (!peajeAbierto) {
        alert("Debes abrir el peaje antes de registrar vehículos.");
    return;
    }

    const tipo = tipos[img.alt];
    Peaje.AgregarPeaje(tipo);

    document.getElementById(tipo).value = Peaje.getContador(tipo);
    document.getElementById("total").value = `$${Peaje.getTotal()}`;
  });
});


document.getElementById("abrir").addEventListener("click", () => {
  Peaje.contar(); 
  peajeAbierto = true;

  document.getElementById("autos").value = 0;
  document.getElementById("buses").value = 0;
  document.getElementById("camiones").value = 0;
  document.getElementById("total").value = "$0";

  
});


document.getElementById("cerrar").addEventListener("click", () => {
  if (!peajeAbierto) {
    
    return;
  }

  const recaudo = Peaje.contar();

  if (recaudo.total === 0) {
    
  } else {
    alert(
      `¡Cerraste el Peaje!\n\n` +
      `Total: $${recaudo.total}\n` +
      `- Carros: ${recaudo.carros}\n` +
      `- Buses: ${recaudo.buses}\n` +
      `- Camiones: ${recaudo.camiones}`
    );
  }

  document.getElementById("autos").value = 0;
  document.getElementById("buses").value = 0;
  document.getElementById("camiones").value = 0;
  document.getElementById("total").value = "$0";

  peajeAbierto = false; 
});
