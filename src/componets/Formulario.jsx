import React from 'react'

export const Formulario = () => {
    const [fruta,setFruta]= React.useState('');
    const [descripcion,setDescripcion]= React.useState('');
    const [lista,setLista]= React.useState([]);

    const guardarDatos = (e) => {
        e.preventDefault()

        

        if(!fruta.trim()){
            console.log('esta vacio fruta')
            return
        }


        if(!descripcion.trim()){
            console.log('esta vacio descripcion')
            return
        }

        console.log('procesando datos...'+ fruta +' '+descripcion)
        setLista([
            ...lista,
            {nombrefruta: fruta, nombredescripcion:descripcion}
        ])

        e.target.reset()

        setFruta('')
        setDescripcion('')


    }
    return (


        <div >
            <h2>Formulario</h2>
            <form onSubmit={ guardarDatos }>

                <input
                  type="text" 

                  placeholder="ingrese fruta" 

                  className="form-control mb-2"

                  onChange={ (e) => setFruta(e.target.value) }
                 
                 
                />

                <input
                  type="text" 

                  placeholder="ingrese descripcion" 
                  
                  className="form-control mb-2"

                  onChange={ (e) => setDescripcion(e.target.value) }
                 
                 
                />
               <button className="btn btn-primary btn-block"  type="submit">Agregar</button>

                 
            
            
            
            
            </form>
            <ul>
                {
                    lista.map((item,index) => (
                        <li key={index}>
                            {item.nombrefruta} - {item.nombredescripcion}
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}
