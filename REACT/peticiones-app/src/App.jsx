import './App.css'

// Asincronismo -> manejar código que tarda en completarse como solicitudes a un servidor o lecturas de archivos, sin bloquear el resto del programa.
// Promesa -> La esperanza de una posible respuesta a eso que va a tardar
function App() {

  // Las funciones adentro de un componente declarenlas con camelCase
  const peticionApi  = () => {
    //Peticion a una API
    fetch('https://thesimpsonsapi.com/api/characters')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
  }

  //async function peticionApiAA(){}
  const  peticionApiAA = async () => {
    //Bloque de manejo de errores
    try{
    //Reemplazo al primer .then
    let response = await fetch('https://rickandmortyapi.com/api/character');
    //console.log(response);
    //Reemplazo para el segundo .then
    let data = await response.json();
    console.log(data);
    }catch(error) {
      console.error(error)
    }
    
  }
  return (
    <> 
      <h1>Holiwis</h1>
      <h2>Chauchis</h2>
      <button onClick={peticionApi}>Apretame para traer datos</button>
      <button onClick={peticionApiAA}>Apretame para traer datos de otra manera</button>
    </>
  )
}

export default App
