import React, { useState } from 'react'
import { isElementOfType } from 'react-dom/test-utils'


export const Listas = () => {

   const estadoInicial = [
       {id:1 , texto: 'tarea 1'},
       {id:2 , texto: 'tarea 2'},
       {id:3 , texto: 'tarea 3'},
       {id:4 , texto: 'tarea 4'},
       {id:5 , texto: 'tarea 5'}
    
   ]

  const [lista,setLista] = useState(estadoInicial)

  const  iselement = () => {
      console.log('tengo un nuevo objeto')
      setLista([
          ...lista,
          {id:6 , texto: 'tarea 6 F'}
      ])
  }
   

    return (
        <div>
             <h2>listas</h2>
             {
                 lista.map( (item,index ) => (
                     <h4 key={ index }>{item.texto}  </h4>
                 ))
             }

             <button onClick={() => iselement()}>Agregar</button>
        </div>
    )
}

export default Listas