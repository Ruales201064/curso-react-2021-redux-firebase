import React from 'react'

const variables = () => {

    // const obtenerpokemon = async() => {
    //     try {
    //      const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/')
    //     const data = await respuesta.json()
    //     console.log(data.results.name)
    //     data.results.forEach(element=>{
    //       console.log(element.name)
    //       console.log(element.url)
    //     })
    //     } catch (error) {
    //       console.log(error)
    //     }
    //     }
    //     obtenerpokemon()

             const image = 'https://imag.malavida.com/mvimgbig/download-fs/genshin-impact-29093-6.jpg'

    return (
        <div>
             <h1>hola  mundo </h1> 

             <div>
                <img src={image} alt="Rpgmmo" />
           </div>

           <>
           
           </>
        </div>
    )
}

export default variables
