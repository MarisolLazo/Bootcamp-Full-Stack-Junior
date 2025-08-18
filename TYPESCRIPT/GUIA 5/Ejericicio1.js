var CabeceraPagina = /** @class */ (function () {
  function CabeceraPagina() {
    this.titulo = "";
    this.color = "";
    this.fuente = "";
    this.alineacion = "";
  }
  CabeceraPagina.prototype.establecerPropiedades = function (titulo, color, fuente) {
    this.titulo = titulo;
    this.color = color;
    this.fuente = fuente;
  };
  CabeceraPagina.prototype.establecerAlineacion = function (alineacion) {
    this.alineacion = alineacion;
  };
  CabeceraPagina.prototype.imprimirCabecera = function () {
    console.log("Cabecera de la Página:");
    console.log("Título: " + this.titulo);
    console.log("Color: " + this.color);
    console.log("Fuente: " + this.fuente);
    console.log("Alineación: " + this.alineacion);
  };
  return CabeceraPagina;
}());

var cabecera = new CabeceraPagina();
cabecera.establecerPropiedades("Bienvenidos", "azul", "Arial");
cabecera.establecerAlineacion("centrado");
cabecera.imprimirCabecera();
