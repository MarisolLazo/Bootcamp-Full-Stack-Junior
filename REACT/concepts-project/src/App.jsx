import './App.css'
import Saludo from './components/Saludo'


function App() {

  return (
    <> {/* Este es el fragment -> NO DIBUJA UN CONTENEDOR EN EL HTML */}

      <h1>Holiwis</h1>

      {/* Este es el primer componente jaja saludos */}
      <Saludo 
      nombre='Jairo' 
      apellido="Vega" 
      />
      <Saludo nombre='Jose' apellido="Mendez" />
      <Saludo nombre='Jorge' apellido="Galdamez"/>
      <Saludo nombre='Mayerli' apellido="Martinez"/>
    </>
  )
}

export default App
