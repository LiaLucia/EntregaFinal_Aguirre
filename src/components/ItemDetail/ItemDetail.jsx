import React, { useEffect, useState } from 'react'

import { gFetch } from "../../utils/gFetch";
import ItemDetailItem from '../ItemDetailItem/ItemDetailItem';
import ItemCount from '../ItemCount/ItemCount';

import { Spinner } from 'react-bootstrap';



const ItemDetail = (idProducto) => {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (idProducto.idProducto){
      gFetch()
      .then(resuelto => {
        setProductos(resuelto.filter(producto => producto.id === idProducto.idProducto))
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => setLoading(false))
    }
    else {
      gFetch()
      .then(resuelto => {
        setProductos(resuelto)
      })
      .catch(error => {
        console.log(error)
      })
      .finally(() => setLoading(false))
    }
  }, [idProducto.idProducto])


  return (
    
    <center>
      {loading ? (
          <Spinner/>)
          :
          <div style = {{display:'table-cell', flexDirection:'row', flexWrap:'wrap'}}> 
           {productos.map((producto) => (<ItemDetailItem
                                            producto = {producto}
                                        />))}
            <ItemCount/>
            </div>
      }
    </center>
  )
}

export default ItemDetail
