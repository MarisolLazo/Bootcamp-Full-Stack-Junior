var Cancion = /** @class */ (function () {
  function Cancion(titulo, genero) {
    this.titulo = titulo;
    this.genero = genero;
    this.autor = "";
  }
  Cancion.prototype.setAutor = function (nombre) {
    this.autor = nombre;
  };
  Cancion.prototype.getAutor = function () {
    return this.autor;
  };
  Cancion.prototype.mostrarDatos = function () {
    console.log("Título: " + this.titulo);
    console.log("Género: " + this.genero);
    console.log("Autor: " + this.autor);
  };
  return Cancion;
}());

var cancion = new Cancion("Imagine", "Rock");
cancion.setAutor("John Lennon");
cancion.mostrarDatos();
