//Comentarios -> Deshabilitar lineas

//multi
//lineas

//Impresiones en consola
console.log('Holiwis');

//Variables y constantes
let variable = "Marisol";

variable = 3;


//Concatenacion
console.log("Hola"+variable);

//Constantes
const numero = 3; //number
numero = 4; //number
console.log(numero);

//Cambiar los tipos de valores o variables
let cinco =parseInt ("5"); //number
console.log(cinco+5); //number

//Operadores matematicos
let suma= 5+5; //number
let resta= 5-5; //number
let division= 5/5; //number
let multiplicacion= 5*5; //number
let residuo= 5%2; //number

//operadores logicos
//OR || AND || && NOT !

//Operadores comparacion
//Igualdad, desigualdad

let igualdad = 5 == 5; //true
console.log(igualdad);
let igualdadEstricta = 5 === 5; //true
console.log(igualdadEstricta);


let desigualdad = 5 != 5; //false
let desigualdadEstricta = 5 !== 5; //false

//Operadores de comparaciones matematicos
let mayorQue = 5 > 5;
let menorQue = 5 < 5;
let mayorIgualQue = 5 >= 5;
let menorIgualQue = 5 <= 5;

//Estructuras de control o condicionales
if (false) {
    console.log("Esto funciona");
}else if (true) {
    console.log("Aca no llega");
}

switch(opcion){
    case 1:
        console.log("Opcion 1");
        break;
    case 2:
        console.log("Opcion 2");
        break;
    default:
        console.log("Opcion no valida");        
        break;

}

//Temario
condicion ? "caso true" : "caso false";


//Estructuras repetitivas o bucles (loops)
contador = 0;
while (contador < 5) {
    console.log(contador);
    contador++;
}

contador = 0;
do {
    console.log(contador);
    contador++;
}while (contador < 5 && contador > 0);

//For

for (let i = 0; i < 5; i++) {
    console.log(i);
}

//Funciones
function saludar(){
console.log("Hola");
}

//Funciones anonimos
const funcionFlecha = () => {
    console.log("Hola desde una funcion flecha")};
    funcionFlecha();