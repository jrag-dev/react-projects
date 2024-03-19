import Componente from "./componentes/Componente.jsx";

import './App.css'
import Propiedades from "./componentes/Propiedades.jsx";
import {Estado} from "./componentes/Estado.jsx";
import {RenderizadoCondicional} from "./componentes/RenderizadoCondicional.jsx";
import {RenderizadoElementos} from "./componentes/RenderizadoElementos.jsx";
import {Eventos} from "./componentes/Eventos.jsx";
import {ContadorHooks} from "./componentes/ContadorHooks.jsx";
import {ScrollHooks} from "./componentes/ScrollHooks.jsx";
import {RelojHooks} from "./componentes/RelojHooks.jsx";
import {AjaxHooks} from "./componentes/AjaxHooks.jsx";
import HooksPersonalizados from "./componentes/HooksPersonalizados.jsx";
import {Referencias} from "./componentes/Referencias.jsx";
import {RefComponente} from "./componentes/RefComponente.jsx";
import {CronometroRerefencias} from "./componentes/CronometroRerefencias.jsx";
import {Formularios1} from "./componentes/Formularios1.jsx";
import {Estilos} from "./componentes/Estilos.jsx";


function mostrarDatos(objeto) {
  const { nombre, profesion } = objeto
   return `${nombre} - ${profesion}`
}

function App() {
  
  let nombre = 'Jose Alvarado'
  let auth = true
  let estaciones = ['Primavera', 'Verano', 'Otoño', 'Invierno']
  const producto = {
    nombre: 'Laptop 24pul ASUS',
    precio: 1800
  }
  
  return (
    <>
      <p>
        { auth ? `El Usuario, ${nombre} está Logueado` : 'El Usuario no está logueado'}
      </p>
      {
        estaciones.map((estacion, index) => {
          return (
            <div key={index} className="estacion">
              {estacion}
            </div>
          )
        })
      }
    
      <hr/>
  
      <p className="producto">Mi producto favorito:
        <span>{producto.nombre}</span>
        <span>${producto.precio}</span>
      </p>
      
      <Componente
        msg="Hola soy un componente Funcional Expresado desde una app"
      />
    
      <hr/>
      
      <Propiedades
        cadena="ESto es una cadena de texto"
        numero={19}
        booleano={true}
        arreglo={[1, 2, 3, 4, 5]}
        objeto={producto}
        elementoReact={<i>Esto es un elemento React</i>}
        funcion={mostrarDatos}
        componenteReact={<Componente msg={"Componente pasado como props"} />}
      />
    
      <hr/>
    
      <Estado />
    
      <hr/>
    
      <RenderizadoCondicional />
    
      <hr/>
    
      <RenderizadoElementos />
    
      <hr />
    
      <Eventos />
    
      <hr/>
    
      <ContadorHooks/>
    
      <hr/>
    
    {/* <ScrollHooks/> */}
    
      <hr/>
    
      <RelojHooks/>
    
      <hr/>
    
      <AjaxHooks/>
    
      <HooksPersonalizados/>
    
      <hr/>
    
      <Referencias/>
    
      <hr/>
    
      <RefComponente/>
    
      <hr/>
    
      <CronometroRerefencias/>
    
      <hr/>
    
      <Formularios1/>
      
      <hr/>
    
      <Estilos/>
    
    </>
  )
}

export default App
