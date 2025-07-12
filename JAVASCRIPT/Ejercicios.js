// ------------------EJERCICIO 1 -----------------
const verificarEdad = (edad) => {
  return edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
};

console.log(verificarEdad(10)); // Ejemplo


// ------------------EJERCICIO 2 -----------------
const calcularNotaFinal = (nombre, carnet, examen, tareas, asistencia, investigacion) => {
  let notaFinal = (examen * 0.2) + (tareas * 0.4) + (asistencia * 0.1) + (investigacion * 0.3);
  console.log(`Nombre: ${nombre}\nCarnet: ${carnet}\nNota final: ${notaFinal.toFixed(2)}`);
};

calcularNotaFinal("Marisol", "UNIVO2025001", 8, 9, 10, 7);


// ------------------EJERCICIO 3 -----------------
const calcularAumento = (nombre, salario, categoria) => {
  let porcentaje = 0;
  switch (categoria.toUpperCase()) {
    case 'A': porcentaje = 0.15; break;
    case 'B': porcentaje = 0.30; break;
    case 'C': porcentaje = 0.10; break;
    case 'D': porcentaje = 0.20; break;
    default: console.log("Categoría inválida"); return;
  }
  let aumento = salario * porcentaje;
  let nuevoSalario = salario + aumento;
  console.log(`Empleado: ${nombre}\nCategoría: ${categoria}\nSalario actual: $${salario}\nAumento: $${aumento}\nNuevo salario: $${nuevoSalario}`);
};

calcularAumento("Ana", 500, "B");


// ------------------EJERCICIO 4 -----------------
const numeroMayor = (a, b) => {
  return a > b ? a : b;
};

console.log("El número mayor es: ", numeroMayor(12, 88));


// ------------------EJERCICIO 5 -----------------
const calcularDescuentoCoche = (modelo, precio) => {
  let descuento = 0;

  switch (modelo.toUpperCase()) {
    case "FORD FIESTA": descuento = 0.05; break;
    case "FORD FOCUS": descuento = 0.10; break;
    case "FORD ESCAPE": descuento = 0.20; break;
    default: console.log("Modelo no aplica para descuento."); return;
  }

  const total = precio - (precio * descuento);
  console.log(`Modelo: ${modelo}`);
  console.log(`Descuento aplicado: ${descuento * 100}%`);
  console.log(`Precio final: $${total}`);
};

calcularDescuentoCoche("Ford Escape", 25000);

// ------------------EJERCICIO 6 -----------------
const calcularDescuentoViaje = (origen, destino, precio) => {
  let descuento = 0;
  if (origen === "Palma") {
    switch (destino) {
      case "La costa del Sol": descuento = 0.05; break;
      case "Panchimalco": descuento = 0.10; break;
      case "Puerto el Triunfo": descuento = 0.15; break;
    }
  }
  let total = precio - (precio * descuento);
  console.log(`Viaje de ${origen} a ${destino}\nDescuento: ${descuento * 100}%\nTotal: $${total}`);
};

calcularDescuentoViaje("Palma", "Panchimalco", 100);


// ------------------EJERCICIO 7 -----------------
let numeros = [15, -3, 30, 45, 2, -7, 60, 0, -15, 10];

let negativos = 0, positivos = 0, multiplosDe15 = 0, sumaPares = 0;

numeros.forEach(num => {
  if (num < 0) negativos++;
  if (num > 0) positivos++;
  if (num % 15 === 0) multiplosDe15++;
  if (num % 2 === 0) sumaPares += num;
});

console.log(`Negativos: ${negativos}`);
console.log(`Positivos: ${positivos}`);
console.log(`Múltiplos de 15: ${multiplosDe15}`);
console.log(`Suma de pares: ${sumaPares}`);

// ------------------EJERCICIO 8 -----------------
let numero = 7;

console.log(`Tabla de multiplicar del ${numero}`);
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}

// ------------------EJERCICIO 9 -----------------
let temperaturasC = [0, 20, 30, 40];

temperaturasC.forEach(c => {
  let f = (c * 9/5) + 32;
  let mensaje = "";

  if (f >= 14 && f < 32) mensaje = "Temperatura baja";
  else if (f >= 32 && f < 68) mensaje = "Temperatura adecuada";
  else if (f >= 68 && f < 96) mensaje = "Temperatura alta";
  else mensaje = "Temperatura desconocida";

  console.log(`${c}°C = ${f.toFixed(2)}°F → ${mensaje}`);
});

// ------------------EJERCICIO 10 -----------------
const calcularPromediosTurnos = (manana, tarde, noche) => {
  const promedio = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;

  let promManana = promedio(manana);
  let promTarde = promedio(tarde);
  let promNoche = promedio(noche);

  console.log(`Promedio Mañana: ${promManana.toFixed(2)}`);
  console.log(`Promedio Tarde: ${promTarde.toFixed(2)}`);
  console.log(`Promedio Noche: ${promNoche.toFixed(2)}`);

  let mayor = Math.max(promManana, promTarde, promNoche);
  let mensaje = "";

  if (mayor === promManana) mensaje = "Turno mañana tiene mayor promedio";
  else if (mayor === promTarde) mensaje = "Turno tarde tiene mayor promedio";
  else mensaje = "Turno noche tiene mayor promedio";

  console.log(mensaje);
};

calcularPromediosTurnos([18, 20, 21, 19, 17], [22, 23, 20, 21, 24, 25], [20, 19, 21, 22, 18, 17, 20, 21, 23, 19, 20]);
