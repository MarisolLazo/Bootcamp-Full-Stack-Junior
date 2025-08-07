//Diferencias entre JS y TS
/* JS
- Flexible
- Facil de aprender
- Forma de programar sea a traves de funciones
- (Interpretado ) WEB -> Navegador
*/
/*  TS
- Tipado duro -> YA NO ES TAN FLEXIBLE
- POO -> Forma de programar -> Los pilares estan COMPLETOS
- Un poco mas dificil de aprender
- Compilado (TSC) -> TRADUCIR EL CODIGO DE TS A JS
*/
// Declaracion de variables 
var numerito = "Fer jeje saludos"; //JS
//Datos primitivos
var numero = 2; //TS
var nombre = "Jairo";
var activo = true;
var vacio = null;
//TIPOS DE DATOS QUE VAMOS A ROGAR, REZAR, INTENTAR, JURAR Y PROMETER NO USAR
var nose = "PUEDO SER CUALQUIER COSA";
var noDefinido = undefined;
console.log(numerito);
console.log(numero);
//Declaracion de funciones
function saludar(nombreParam) {
    return "Holiwiis, ".concat(nombreParam);
}
console.log(saludar("Jairo"));
// Estructuras de datos
// Array
//Vamos a guardar un array de numeros O un array de STRINGS
var arraycito = [1, 2, 3, 4];
arraycito = ["as"];
//Vamos a guardar dentro de EL ARRAY, numeros o strings
var arraycitoDobleDato = [123, "numero de la suerte", 2555];
//arraycito.push("asdad") NO FUNCIONA
// Tupla
var arrayEspecifico = [27, "Jairo", "otro string"];
//Podemos llegar a tener 2 tipos de datos
// VARIABLE :1TIPO | 2TIPO 
var dosTiposDeDatos = null;
dosTiposDeDatos = "";
var programador = { name: "Jairo", age: 27 };
var fsj30 = [{ name: "Jairo", age: 27 }, { name: "Jorge", age: 25 }];
