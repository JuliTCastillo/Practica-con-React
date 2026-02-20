import { useContext } from "react";
import { DataContext } from "./DataContext";

const ListaProductos = () => {

    const {data, setData} = useContext(DataContext);

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
                                <button href="#" className="btn btn-primary">Comprar</button>
                            </div>
                        </div>
                    </div>

                ))}

            </div>
        </div>
    )
}

export default ListaProductos;