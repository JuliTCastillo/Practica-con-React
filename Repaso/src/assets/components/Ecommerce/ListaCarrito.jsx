import { useContext } from "react";
import { DataContext } from "./DataContext";
import ItemCarrito from "./ItemCarrito";

const ListaCarrito = () => {

    const {data, setData} = useContext(DataContext);

    const removeItem = (event) =>{
        const id = event.id; //obtenemos el id del producto
        setData(prevData => prevData.map(item => 
            item.id === id  //buscamos el item de la id que fue seleccionada
                ? {...item, status: 'un-selected'} //le agregamos una propiedad de estado
                : item )); //en el caso contrario, no hacemos nada
    }

    const filteredItems = data.filter(item => item.status === 'selected')
  
    return (
    <div className="col-md-3 border-start border-4 border-secondary">
      <div className="sticky-top " >
        <h2>Shopping Cart</h2>
        {filteredItems.map(producto => (
          <ItemCarrito key={producto.id} producto={producto}  onClick={()=>{removeItem(producto)}}/>
        ))}
      </div>
    </div>

  )
}

export default ListaCarrito;