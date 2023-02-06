
import Item from '../Item/Item';

function ItemList(productos) {
    return (
      
          <div style = {{display:'flex', flexDirection:'row', flexWrap:'wrap'}}> 
            {productos.producto.map((producto) => (<Item 
                                            producto = {producto}
                                        />))}
        </div>
    )
}

  export default ItemList
