import React, { Component, useState } from "react";

const ContadorClase = () => {
    //Esto es como se ve en el constructor
    const [conteo, setConteo] = useState(0); //Esto se lo conoce como HOOK

    //Metodos
    const incrementar = () => {
        setConteo((prevConteo) => prevConteo + 1)
    }

    const reducir = () => {
        setConteo((prevConteo) => prevConteo - 1)
    }
    //esto seria el render
    return (
        <div>
            <h1>Contador de Clicks: </h1>
            <p>conteo: {conteo}</p>
            <button onClick={incrementar}>Sumar Click</button>
            <button onClick={reducir}>Restar Click</button>
        </div>
    )
}

export default ContadorClase;