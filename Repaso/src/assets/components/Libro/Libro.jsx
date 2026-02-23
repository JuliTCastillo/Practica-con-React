import React, { useState } from 'react'
import './libro.css'
import styled from 'styled-components'; //importamos la libreria

export const Libro = ({libro}) => {

    const Titulo = styled.h2`
        display:block;
        color: red;
    `
    const [miClase, setMiClase] = useState('default');
    

    return (
        <>
            <div className={'card col-md-3 ' + miClase}>
                <div className='card-body'>
                    <h5 className='card-title'>{libro.titulo}</h5>
                    <p className='card-text'>Publicado en {libro.publicado}</p>
                    <button className='btn btn-primary' onClick={()=>{setMiClase('seleccionado')}}>Seleccionar</button>
                </div>
            </div>
        </>
    )
}
