
import React from "react";
import { Formulario } from "./componets/Formulario";
// import { Contador } from "./componets/Contador.jsx";
// import { Evento } from "./componets/Evento.jsx";
import  Listas  from "./componets/Listas";
// import Parrafo from "./componets/Parrafo.jsx";
// import Variables from "./componets/Variables.jsx";

function App() {
  return (
    <div className="App">
     
      <div className='container mt-5'>
        <h2>Soy Un Programador Junior</h2>
           {/* <Parrafo />
           <Variables />
           <Evento  />
           <Contador  /> */}
           {/* <Listas  /> */}
           <Formulario />
      </div>
    </div>
  );
  
}

export default App;
