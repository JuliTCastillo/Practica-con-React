import {createContext, useEffect, useState } from "react";

//Creando el contexto
export const DataContext = createContext();

export const DataProvider = ({ children }) => {

    const [data, setData] = useState([]);

    //Antes de que el componente cargue, solicitamos la carga de los datos
    useEffect(() => {
        fetch('./public/productos.json') //indicamos donde se encuentra
            .then(response => response.json()) //Su informacion lo convertimos a json
            .then(datos => setData(datos)) //almacenamos los datos en el hook
            .catch(error => console.error('Error fetching data:', error)) //En el caso de que nos de error
    }, [])

    return (
        <DataContext.Provider value={{ data, setData }}>
            {children}
        </DataContext.Provider>
    )
}