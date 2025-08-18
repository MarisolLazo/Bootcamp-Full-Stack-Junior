function Persona(nombre, apellido, direccion, telefono, edad) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.direccion = direccion;
  this.telefono = telefono;
  this.edad = edad;

  this.verificarEdad = function () {
    return this.edad >= 18 ? "Es mayor de edad." : "No es mayor de edad.";
  };

  this.mostrarDatos = function () {
    return "Nombre completo: " + this.nombre + " " + this.apellido + "\n" +
           "Dirección: " + this.direccion + "\n" +
           "Teléfono: " + this.telefono + "\n" +
           "Edad: " + this.edad;
  };
}

function Empleado(nombre, apellido, direccion, telefono, edad) {
  Persona.call(this, nombre, apellido, direccion, telefono, edad);
  this.sueldo = 0;

  this.cargarSueldo = function (monto) {
    this.sueldo = monto;
    return "Sueldo cargado: $" + this.sueldo;
  };

  this.imprimirSueldo = function () {
    return "Sueldo: $" + this.sueldo;
  };
}

var empleado = new Empleado("Mar", "Campos", "San Salvador", "12345678", 30);

console.log(empleado.cargarSueldo(1000));
console.log(empleado.verificarEdad());
console.log(empleado.mostrarDatos());
console.log(empleado.imprimirSueldo());
