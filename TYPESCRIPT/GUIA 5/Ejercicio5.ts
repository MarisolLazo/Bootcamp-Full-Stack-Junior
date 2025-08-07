class Persona {
  nombre: string;
  apellido: string;
  direccion: string;
  telefono: string;
  edad: number;

  constructor(nombre: string, apellido: string, direccion: string, telefono: string, edad: number) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.direccion = direccion;
    this.telefono = telefono;
    this.edad = edad;
  }

  verificarEdad(): string {
    return this.edad >= 18 ? "Es mayor de edad." : "No es mayor de edad.";
  }

  mostrarDatos(): string {
    return `Nombre completo: ${this.nombre} ${this.apellido}\n` +
           `Dirección: ${this.direccion}\n` +
           `Teléfono: ${this.telefono}\n` +
           `Edad: ${this.edad}`;
  }
}

class Empleado extends Persona {
  sueldo: number = 0;

  cargarSueldo(monto: number): string {
    this.sueldo = monto;
    return "Sueldo cargado: $" + this.sueldo;
  }

  imprimirSueldo(): string {
    return "Sueldo: $" + this.sueldo;
  }
}

let empleado = new Empleado("Mar", "Campos", "San Salvador", "12345678", 30);

console.log(empleado.cargarSueldo(1000));
console.log(empleado.verificarEdad());
console.log(empleado.mostrarDatos());
console.log(empleado.imprimirSueldo());
