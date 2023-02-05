import React, { useEffect, useState } from 'react'


import { Spinner } from 'react-bootstrap';
import { gFetch } from "../../utils/gFetch";
import ItemCount from '../ItemCount/ItemCount'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
           {productos.map((producto) => <ul key={producto.id}>
                                          <Card style={{ width: '26rem' , margin:'5px'}}>
                                          <Card.Body>
                                            <Card.Title>{producto.name}</Card.Title>
                                            <Card.Img variant="top" src={producto.foto} />
                                            <Card.Text>
                                              {producto.descripcion}
                                            </Card.Text>
                                            <Card.Text>
                                              $ {producto.price}
                                            </Card.Text>
                                            <ItemCount/>
                                            <Button variant="primary">Agregar al carrito</Button>

                                          </Card.Body>
                                          </Card>
                                        </ul>)}
            </div>
      }
    </center>
  )
}

export default ItemDetail