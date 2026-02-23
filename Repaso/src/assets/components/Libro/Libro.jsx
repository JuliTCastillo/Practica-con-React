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
            <div className='item'>
                <Titulo>{libro.titulo}</Titulo>
                <span>Publicado en {libro.publicado}</span>
            </div>
        </>
    )
}
