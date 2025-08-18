//console.log("Holiwis");
const contenedorCarrito = document.getElementById('cuerpo-carrito');
let cursosCarrito = [];

function vaciarCarrito(evento){
    console.log("Soy el vaciar carrito");

    cursosCarrito = [];
    contenedorCarrito.innerHTML = "";
}

function agregarCurso(evento){
    console.log("Soy el agregar curso");
    //console.log(evento.target.parentElement.parentElement);
    
   let curso = leerDatosCurso(evento.target.parentElement.parentElement);
   console.log(curso);

   //Chequeamos si el curso existe previamente y guardamos true o false
   const existe = cursosCarrito.some( (cursoArr) => cursoArr.id == curso.id)

    if(existe){
        cursosCarrito.map( (cursoArr) => { 
            if(cursoArr.id === curso.id){
                cursoArr.cantidad += 1;
                //Aumentar precio
                //Utilizar un metodo de string que pueda quitar el primer caracter
                //Metodos posibles = Substring o Slice
                cursoArr.precio = cursoArr.precio.substring(1);

                //Transformamos el string a numero
                //parseInt o parseFloat
                cursoArr.precio = parseFloat(cursoArr.precio);

                //Aumentamos el precio
                cursoArr.precio += cursoArr.precio;

                //Devolvemos el precio a su formato original
                cursoArr.precio = `$${cursoArr.precio}`;

                return cursoArr;
            }
        })
    }else{
        cursosCarrito.push(curso);
    }
    console.log(cursosCarrito);
   pintarCarritoHTML();
   
}

function leerDatosCurso(curso){
    console.log(curso);
    
    console.log(curso.querySelector('a').getAttribute('data-id'));
    console.log(curso.querySelector('img').src);
    console.log(curso.querySelector('h4').textContent);
    console.log(curso.querySelector('h5').textContent);
    
    const infoCurso = {
            id:curso.querySelector('a').getAttribute('data-id') ,
            imagen: curso.querySelector('img').src ,
            nombre: curso.querySelector('h4').textContent ,
            precio: curso.querySelector('h5').textContent ,
            cantidad: 1 
    }

    return infoCurso;
}

function pintarCarritoHTML(){
    //Limpiar el html del carrito antes de mapear los datos
    contenedorCarrito.innerHTML = "";

    cursosCarrito.map( (curso) => { 

        //Crear una fila
        let fila = document.createElement('tr');

        //Asignar los valores en celdas
        fila.innerHTML = `
        <td><img src="${curso.imagen}" width="80"/></td>
        <td>${curso.nombre}</td>
        <td>${curso.precio}</td>
        <td>${curso.cantidad}</td>
        <td><a class="btn btn-danger" onclick="eliminarCurso(${curso.id})">Eliminar</a></td>
        `

        contenedorCarrito.appendChild(fila);
    })
}

function eliminarCurso(id){
console.log(id);

cursosCarrito.map( (curso) => {
        console.log(curso.id);

    //Si tiene cantidad mayor a 1, tiene que ir descontando de 1 en 1

    if(curso.id == id){
        console.log(curso.id);
        //Va a guardar los cursos que sean diferentes a ese ID
        cursosCarrito = cursosCarrito.filter( curso => curso.id != id)
    }

})

pintarCarritoHTML();
}