import React  from 'react'


export const Contador = () => {

  const [contador,setContador] = React.useState(0)

//   const ejecutar = () => {
//       console.log('acceso autorizado (:')
//       setContador(contador + 1)
//       if(contador == 19){
//         alert('sigueme en tiktok XD')
//       }
      
//   }
    return (
        <div>
            <h2>contador</h2>
            <h3>nuestro numero va aumentando : { contador }</h3>
           <h4>
               {
                   contador > 10 ? 'es mayor a 10' : 'esperando resultado'
               }
           </h4>

            <button onClick= { () => setContador(contador + 1) }>Aumentar</button>
        </div>
    )
}
