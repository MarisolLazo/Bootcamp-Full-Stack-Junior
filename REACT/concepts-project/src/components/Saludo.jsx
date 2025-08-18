//Crear nuestro primer componente

import { useState } from "react";
import { Chauchis } from "./Chauchis";

//Props -> Propiedades -> En realidad son un objeto
function Saludo({nombre, apellido}) {
  //console.log(props);
// function Saludo(props) {
  /* Destructuring object 

    const {nombre, apellido} = props
    */
  //let curso = "FSJ30"; 

  //El reemplazo de las variables para manipular datos en REACT
  //El ESTADO -> Hook -> Funciones PREHECHAS que ya vienen con React
  const [nombreCurso, setNombreCurso] = useState("FSJ30");

  //console.log(nombreCurso);
  

  return (
    <>
      <h1>Holiwis, {nombre} {apellido}</h1>
      <h2>Curso: {nombreCurso}</h2>
      <button onClick={ () => setNombreCurso("Java30")}>Magia</button>
      <button onClick={ () => setNombreCurso("FSJ30")}>Regresar</button>
      <br/>

      <Chauchis nombre={nombre} curso={nombreCurso} />
  </>)
}

export default Saludo;