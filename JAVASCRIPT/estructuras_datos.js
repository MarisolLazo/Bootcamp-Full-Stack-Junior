//PILARES QUE NO SE PUEDEN UTILIZAR CON JAVASCRIPT
// Encapsulamiento -> LIMITAR EL ACCESO A LA INFORMACION DE UNA CLASE -> Modificadores de acceso
// Abstraccion -> Nos da herramientas o metodos para acceder a informacion encapsulada


// ARRAYS 
//Array indexado -> Ordena en indice 0 en adelante
let arraycitoIdx = [18,19,25,33];

console.log(arraycitoIdx[0]);

// "Array asociativo" -> Guardamos en clave y valor
let arrayAsociativo = {
    nombre:  "Jairo"
}

console.log(arrayAsociativo['nombre']);

// Array multidimensional
// Creamos un array con varias dimensiones (Array dentro de array)
let arraycitoMulti = [ [ 1,2],[{ nombre : "Jairo"}]];
console.log(arraycitoMulti);

// Accedemos a la posicion 0 -> ES LA PRIMERA DEL ARRAY
let cajaDeIndiceCero = arraycitoMulti[0];
// Imprimir el 2 
console.log(cajaDeIndiceCero[1]);

// Accedemos a la indice 1 
let cajaDeIndiceUno = arraycitoMulti[1];
// Accedemos a la caja para poder ver su contenido
console.log(cajaDeIndiceUno[0]);

//Estos console log muestran el nombre
console.log(cajaDeIndiceUno[0].nombre);
console.log(arraycitoMulti[1][0].nombre);


//Metodos para arrays
//let nombres = ["Darwin", "Luz","Alejandra","Kevin"];

//Dar vuelta un array
//console.log(nombres.reverse());
let nombresAlReves = nombres.reverse();

//Recorrer arrays
//Foreach -> Recorre el array y nos deja utilizar, la posicion y el indice del array
nombresAlReves.forEach( (value,index) => { 
    console.log(index);
    console.log(value);
})

/* 
for(let value of nombres){
    console.log(value);
}
*/ 

//Metodos Utiles
//Map -> Recorre el array y nos retorna algo por cada posicion -> transformar valores
let nombres = ["Darwin", "Luz","Alejandra","Kevin"];

let nombresMayus = nombres.map((value) => {
    return value.toUpperCase()
});
console.log(nombresMayus);

let numeritos = [1,3,5,7];

let numeritosPorDos = numeritos.map((value) => {
    return value*2;
})

console.log(numeritosPorDos);