class CabeceraPagina {
  titulo: string = "";
  color: string = "";
  fuente: string = "";
  alineacion: string = "";

  establecerPropiedades(titulo: string, color: string, fuente: string) {
    this.titulo = titulo;
    this.color = color;
    this.fuente = fuente;
  }

  establecerAlineacion(alineacion: "izquierda" | "centrado" | "derecha") {
    this.alineacion = alineacion;
  }

  imprimirCabecera() {
    console.log("Cabecera de la Página:");
    console.log("Título: " + this.titulo);
    console.log("Color: " + this.color);
    console.log("Fuente: " + this.fuente);
    console.log("Alineación: " + this.alineacion);
  }
}

let cabecera = new CabeceraPagina();
cabecera.establecerPropiedades("Bienvenidos", "azul", "Arial");
cabecera.establecerAlineacion("centrado");
cabecera.imprimirCabecera();
