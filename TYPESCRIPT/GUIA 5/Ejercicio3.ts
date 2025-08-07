class Cancion {
  titulo: string;
  genero: string;
  autor: string = "";

  constructor(titulo: string, genero: string) {
    this.titulo = titulo;
    this.genero = genero;
  }

  setAutor(nombre: string) {
    this.autor = nombre;
  }

  getAutor() {
    return this.autor;
  }

  mostrarDatos() {
    console.log("Título: " + this.titulo);
    console.log("Género: " + this.genero);
    console.log("Autor: " + this.autor);
  }
}

let cancion = new Cancion("Imagine", "Rock");
cancion.setAutor("John Lennon");
cancion.mostrarDatos();
