export default class PeajeFondos {
  constructor() {
    this.total = 0;
    this.contadores = {
      autos: 0,
      buses: 0,
      camiones: 0
    };
    this.valores = {
      autos: 5000,
      buses: 10000,
      camiones: 15000
    };
  }

  AgregarPeaje(tipo) {
    if (this.contadores.hasOwnProperty(tipo)) {
      this.contadores[tipo]++;
      this.total += this.valores[tipo];
    } else {
      console.warn(`Tipo no reconocido: ${tipo}`);
    }
  }

  getTotal() {
    return this.total;
  }

  getContador(tipo) {
    return this.contadores[tipo] || 0;
  }

  contar() {
    const recaudo = {
      total: this.total,
      carros: this.contadores.autos,
      buses: this.contadores.buses,
      camiones: this.contadores.camiones
    };

    // Reinicia
    this.total = 0;
    this.contadores = { autos: 0, buses: 0, camiones: 0 };

    return recaudo;
  }
}
