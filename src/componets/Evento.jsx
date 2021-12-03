import React, { Fragment , useState } from 'react'


export const Evento = () => {
  
 
    const [texto, setTexto] = useState('texto desde estado')

    const evento = () => {
        console.log('me diste click gracias')
        setTexto('cambiando el texto...')
    }

    return (
        <Fragment>
            <hr />
            <h2>{ texto  }</h2>
            <button onClick={ () => evento() }>Click</button>
        </Fragment>
    )
}
