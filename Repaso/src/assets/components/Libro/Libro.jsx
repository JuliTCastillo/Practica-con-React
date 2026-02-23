import React from 'react'
import './libro.css'

export const Libro = ({libro}) => {

    return (
        <>
            <div className='item'>
                <h2>{libro.titulo}</h2>
                <span>Publicado en {libro.publicado}</span>
            </div>
        </>
    )
}
