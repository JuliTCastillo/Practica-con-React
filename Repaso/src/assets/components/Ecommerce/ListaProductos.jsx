import { useContext } from "react";
import { DataContext } from "./DataContext";

const ListaProductos = () => {

    const {data, setData} = useContext(DataContext);

    const manejarClick = (event) =>{
        const id = event.id; //obtenemos el id del producto
        setData(prevData => prevData.map(item => 
            item.id === id  //buscamos el item de la id que fue seleccionada
                ? {...item, status: 'selected'} //le agregamos una propiedad de estado
                : item )); //en el caso contrario, no hacemos nada
    }

    return (
        <div className="col-md-9">
            <h2>Productos</h2>
            <div className="row">

                {data.map(prod => (

                    <div className="col-md-4 mb-4" key={prod.id}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{prod.nombre}</h5>
                                <p className="card-text">${prod.precio}</p>
                                <button href="#" className="btn btn-primary" onClick={()=>{manejarClick(prod)}}>Comprar</button>
                            </div>
                        </div>
                    </div>

                ))}

            </div>
        </div>
    )
}

export default ListaProductos;