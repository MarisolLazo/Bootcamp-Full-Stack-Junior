 // ------------------ EJERCICIO 1 ------------------
let verificarEdad = edad => edad >= 18 ? "Eres mayor de edad" : "Eres menor de edad";
console.log(verificarEdad(10));

// ------------------ EJERCICIO 2 ------------------
let calcularNotaFinal = (datos) => {
  let [nombre, carnet, examen, tareas, asistencia, investigacion] = datos;
  let notaFinal = (examen * 0.2) + (tareas * 0.4) + (asistencia * 0.1) + (investigacion * 0.3);
  console.log(`Nombre: ${nombre}\nCarnet: ${carnet}\nNota final: ${notaFinal.toFixed(2)}`);
};
calcularNotaFinal(["Marisol", "UNIVO2025001", 8, 9, 10, 7]);

// ------------------ EJERCICIO 3 ------------------
let calcularAumento = ([nombre, salario, categoria]) => {
  let porcentaje = {
    A: 0.15,
    B: 0.30,
    C: 0.10,
    D: 0.20
  }[categoria.toUpperCase()] || 0;

  let aumento = salario * porcentaje;
  let nuevoSalario = salario + aumento;

  porcentaje !== 0
    ? console.log(`Empleado: ${nombre}\nCategoría: ${categoria}\nSalario actual: $${salario}\nAumento: $${aumento}\nNuevo salario: $${nuevoSalario}`)
    : console.log("Categoría inválida");
};
calcularAumento(["Ana", 500, "B"]);

// ------------------ EJERCICIO 4 ------------------
let numeroMayor = (a, b) => Math.max(a, b);
console.log("El número mayor es:", numeroMayor(12, 88));

// ------------------ EJERCICIO 5 ------------------
let calcularDescuentoCoche = ([modelo, precio]) => {
  let descuentos = {
    "FORD FIESTA": 0.05,
    "FORD FOCUS": 0.10,
    "FORD ESCAPE": 0.20
  };

  let clave = modelo.toUpperCase();
  let descuento = descuentos[clave];

  descuento
    ? console.log(`Modelo: ${modelo}\nDescuento aplicado: ${descuento * 100}%\nPrecio final: $${(precio - (precio * descuento)).toFixed(2)}`)
    : console.log("Modelo no aplica para descuento.");
};
calcularDescuentoCoche(["Ford Escape", 25000]);

// ------------------ EJERCICIO 6 ------------------
let calcularDescuentoViaje = ([origen, destino, precio]) => {
  let descuentos = {
    "La costa del Sol": 0.05,
    "Panchimalco": 0.10,
    "Puerto el Triunfo": 0.15
  };

  let descuento = origen === "Palma" ? descuentos[destino] || 0 : 0;
  let total = precio - (precio * descuento);

  console.log(`Viaje de ${origen} a ${destino}\nDescuento: ${descuento * 100}%\nTotal: $${total.toFixed(2)}`);
};
calcularDescuentoViaje(["Palma", "Panchimalco", 100]);

// ------------------ EJERCICIO 7 ------------------
let numeros = [15, -3, 30, 45, 2, -7, 60, 0, -15, 10];
let negativos = numeros.filter(n => n < 0).length;
let positivos = numeros.filter(n => n > 0).length;
let multiplosDe15 = numeros.filter(n => n % 15 === 0).length;
let sumaPares = numeros.filter(n => n % 2 === 0).reduce((a, b) => a + b, 0);

console.log(`Negativos: ${negativos}`);
console.log(`Positivos: ${positivos}`);
console.log(`Múltiplos de 15: ${multiplosDe15}`);
console.log(`Suma de pares: ${sumaPares}`);

// ------------------ EJERCICIO 8 ------------------
let tabla = Array.from({ length: 10 }, (_, i) => `${7} x ${i + 1} = ${7 * (i + 1)}`);
console.log("Tabla del 7:\n" + tabla.join("\n"));

// ------------------ EJERCICIO 9 ------------------
let temperaturasC = [0, 20, 30, 40];
let etiquetas = t => {
  let f = (t * 9 / 5) + 32;
  let mensaje = 
    f >= 14 && f < 32 ? "Temperatura baja" :
    f >= 32 && f < 68 ? "Temperatura adecuada" :
    f >= 68 && f < 96 ? "Temperatura alta" :
    "Temperatura desconocida";
  return `${t}°C = ${f.toFixed(2)}°F → ${mensaje}`;
};
temperaturasC.map(t => console.log(etiquetas(t)));

// ------------------ EJERCICIO 10 -------------------
let calcularPromediosTurnos = ([manana, tarde, noche]) => {
  let promedio = arr => arr.reduce((a, b) => a + b, 0) / arr.length;

  let pm = promedio(manana);
  let pt = promedio(tarde);
  let pn = promedio(noche);

  let mensaje =
    pm > pt && pm > pn ? "Turno mañana tiene mayor promedio" :
    pt > pn ? "Turno tarde tiene mayor promedio" :
    "Turno noche tiene mayor promedio";

  console.log(`Promedio Mañana: ${pm.toFixed(2)}\nPromedio Tarde: ${pt.toFixed(2)}\nPromedio Noche: ${pn.toFixed(2)}\n${mensaje}`);
};

calcularPromediosTurnos([
  [18, 20, 21, 19, 17],
  [22, 23, 20, 21, 24, 25],
  [20, 19, 21, 22, 18, 17, 20, 21, 23, 19, 20]
]);
