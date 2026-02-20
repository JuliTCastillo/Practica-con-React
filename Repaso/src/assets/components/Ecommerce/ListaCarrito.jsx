import { useContext } from "react";
import { DataContext } from "./DataContext";
import ItemCarrito from "./ItemCarrito";

const ListaCarrito = () => {

    const {data, setData} = useContext(DataContext);
  

    return (
    <div className="col-md-3 border-start border-4 border-secondary">
      <div className="sticky-top " >
        <h2>Shopping Cart</h2>
        {data.map(producto => (
          <ItemCarrito key={producto.id} producto={producto} />
        ))}
      </div>
    </div>

  )
}

export default ListaCarrito;