console.log("Holiwis");


// Obtenemos un elemento del frontend(HTML)
let elementoDOM = document.getElementById('textoSaludo');
console.log(elementoDOM);

let contenidoDOM = document.querySelector('#contenido');
console.log(contenidoDOM);

const btnApretable = document.querySelector('#botonMagico');



// Propiedades de los elementos
// InnerHTML -> Obtiene todo el contenido HTML del elemento
// innerText -> Obtiene solo el texto del elemento
console.log(elementoDOM.innerHTML);
console.log(elementoDOM.innerText);

elementoDOM.innerHTML = "<h2>Chauchis</h2>"

contenidoDOM.innerHTML = "<h3>Este texto esta inyectado con JS</h3>"



console.log(btnApretable);
//Metodo de los elementos
btnApretable.addEventListener('click',() => { 
    alert('Avada Kedavra');
    console.log("Funciono el boton");
    
    let dato = prompt("Ingresame tu nombre porfa. No preguntes para que")
    console.log(dato);
    
    elementoDOM.style.fontFamily = "sans-serif";
    elementoDOM.style.color = "red";
    elementoDOM.style.marginLeft = "2rem";
})


const btnArraycito = document.getElementById('btnArraycito');
// Metodo de JS
// Almacenar datos en local para el usuario
let arraycito = [1,2,3];
console.log(arraycito);

//localStorage -> Almacenamiento local en el navegador  del usuario
//localStorage -> Esta diseñado para guardar OBJETOS
localStorage.setItem('arraycito',JSON.stringify(arraycito));
let datita = localStorage.getItem('arraycito')
//Mostramos los datos del localStorage QUE SON UN STRING
console.log(datita);
//Devolver la data a su tipo original
let datitaArray = JSON.parse(datita);
console.log(datitaArray)


/*
    addEventListener, al boton con id btnArraycito
    La funcionalidad de este boton es agregar un elemento con valor 4
    al array llamado arraycito. Setearlo en el localStorage y mostrarlo en consola.
*/

btnArraycito.addEventListener('click', () => {
    console.log("Estoy andando");
    arraycito.push(4);
    console.log(arraycito);

    localStorage.setItem('arraycito',JSON.stringify(arraycito));
    console.log(localStorage.getItem('arraycito'));
})