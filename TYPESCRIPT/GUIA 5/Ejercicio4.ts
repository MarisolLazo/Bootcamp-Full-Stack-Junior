class Cuenta {
  nombre: string;
  cantidad: number;
  tipo: string;
  numero: string;

  constructor(nombre: string, cantidad: number, tipo: string, numero: string) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.tipo = tipo;
    this.numero = numero;
  }

  depositar() {
    if (this.cantidad < 5) {
      console.log("El valor a depositar debe ser mayor a $5.00");
    } else {
      console.log("Se ha depositado correctamente: $" + this.cantidad);
    }
  }

  retirar(valor: number) {
    if (this.cantidad <= 0) {
      console.log("No hay nada en la cuenta.");
    } else if (valor < 5) {
      console.log("Debe retirar más de $5.00");
    } else if (valor > this.cantidad) {
      console.log("No hay suficiente saldo.");
    } else {
      this.cantidad -= valor;
      console.log("Se retiraron $" + valor + ". Saldo restante: $" + this.cantidad);
    }
  }

  mostrarDatos() {
    console.log("Nombre: " + this.nombre);
    console.log("Tipo de cuenta: " + this.tipo);
    console.log("Número de cuenta: " + this.numero);
  }
}

let cuenta = new Cuenta("Ana", 100, "Ahorro", "12345");
cuenta.depositar();
cuenta.retirar(10);
cuenta.mostrarDatos();
