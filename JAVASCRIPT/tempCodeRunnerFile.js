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
