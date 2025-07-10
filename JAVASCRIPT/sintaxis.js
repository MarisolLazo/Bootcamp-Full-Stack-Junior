// Fat Arrow Functions Funciones flecha
const funcionFlecha = () => { console.log("Soy anonima") };
funcionFlecha();

//Callback ???? Una funcion que se pasa como parametro a otra

function saludar(){
    console.log("Holiwis");
}


function funcionQueUsaCallback(callbackfn){
    let nombre = callbackfn();
    
    console.log("Soy la funcion que te ejecuta, saludos "+nombre);
}



/* 
**  FUNCION QUE USA CALLBACK
** NECESITA QUE LE RETORNES UN NOMBRE
*/

funcionQueUsaCallback(  () => { 
    
   return("Jairo");
   
})