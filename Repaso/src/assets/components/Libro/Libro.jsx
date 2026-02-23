import React from 'react'
import './libro.css'
import styled from 'styled-components'; //importamos la libreria

export const Libro = ({libro}) => {

    const Titulo = styled.h2`
        display:block;
        color: red;
    `

    return (
        <>
            <div className='card col-md-3'>
                <div className='card-body'>
                    <h5 className='card-title'>{libro.titulo}</h5>
                    <p className='card-text'>Publicado en {libro.publicado}</p>
                </div>
            </div>
        </>
    )
}
