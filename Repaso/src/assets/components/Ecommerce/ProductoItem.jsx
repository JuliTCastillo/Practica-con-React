import React from "react";

const ProductoItem = ({producto}) => {
    return (
        <div className="card m-2">
            <div>
                <h2>{producto.nombre} </h2>
                <p>
                    <strong>Precio:</strong>${producto.precio}
                </p>
            </div>
            <button className="btn btn-success">Comprar!</button>
        </div>
    )
}

export default ProductoItem;