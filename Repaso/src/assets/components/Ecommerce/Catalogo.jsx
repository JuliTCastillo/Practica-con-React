import { Fragment } from "react";
import ProductoItem from "./ProductoItem";

const Catalogo = () => {
    const productos = [
        { id: 1, nombre: "Camiseta", precio: 20.99 },
        { id: 2, nombre: "Pantalon", precio: 35.50 },
        { id: 3, nombre: "Zapatos", precio: 60.0 },
        { id: 4, nombre: "Bolso", precio: 25.75 },
        { id: 5, nombre: "Gorra", precio: 15.0 },
        { id: 6, nombre: "Medias", precio: 5.0 },
    ]

    return (
        <Fragment>
            <h2>Catalogo de productos</h2>

            {/* bloque condicional - condicional alternario */}
            {productos.length === 0 ? (
                <p>No hay productos disponibles en el catalogo.</p>
            ) : (
                <div className="d-flex flex-wrap justify-content-center">
                    {productos.map(
                        (prod) => (
                            <ProductoItem key={prod.id} producto={prod}/>
                        )
                    )}
                </div>
            )}

        </Fragment>
    )
}

export default Catalogo;