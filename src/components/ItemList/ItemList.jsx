import Item from "../Item/Item";

function ItemList(productos) {
    return (
      <div>
        {productos.map((producto) => (
                                    <Item/>
                                    
                                    )
      )}
      </div>
      
    
    )
}

  export default ItemList

  //<li key={producto.id}>{producto.nombre}</li>