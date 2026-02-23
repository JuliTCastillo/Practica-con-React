import React from 'react'
import { Libro } from '../Libro/Libro'

export const Catalogo = () => {
    const libros = [
        {id:1, titulo: 'El gran Gatsby', publicado: 1925},
        {id:2, titulo: 'Cien Años de Soledad', publicado: 1967},
        {id:3, titulo: 'Harry Potter y la piedra Filosofal', publicado: 1997},
        {id:4, titulo: 'El hobbit', publicado: 1937},
        {id:5, titulo: '1984', publicado: 1949},
        {id:6, titulo: 'Crimen y Castigo', publicado: 1866},
        {id:7, titulo: 'Matar un Ruiseñor', publicado: 1960},
        {id:8, titulo: 'Don quijote de la mancha', publicado: 1605},
    ]
    return (
        <>
            <div className="libros">
                {libros.map(
                    (libro) => (
                        <Libro key={libro.id} libro={libro}/>
                    )
                )}
            </div>
        </>
    )
}
