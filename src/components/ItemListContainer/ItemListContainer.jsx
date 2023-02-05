import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {useState} from 'react';

import { gFetch } from "../../utils/gFetch"

//import ItemList from '../ItemList/ItemList';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ItemListContainer() {
  const [productos, setProductos] = useState([])
  const [loading, setLoading] = useState(true)

  const {idCategoria} = useParams()
 
  

  useEffect(() => {
    if (idCategoria){
      gFetch()
      .then(resuelto => {
        setProductos(resuelto.filter(producto => producto.categoria === idCategoria))
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
  }, [idCategoria])

  return (
     <center>
      
      {loading ? (
        <h1> Cargando... </h1>
      ) : 
      //<ItemList/>  
      <div style = {{display:'flex', flexDirection:'row', flexWrap:'wrap'}}> 
      {productos.map(producto => 
                                    <ul key={producto.id}>
                                      <Card style={{ width: '16rem' }}>
                                        <Card.Img variant="top" src={producto.foto} />
                                          <Card.Body>
                                            <Card.Title>{producto.name}</Card.Title>
                                            <Card.Text> {producto.descripcion}</Card.Text>
                                            <Link to ={`/detalle/${producto.id}`}>
                                              <Button variant="primary"> Ver más</Button>
                                            </Link>
                                          </Card.Body>
                                      </Card>
                                    </ul>)
}
      </div>  
      }
     </center>
  )  
}

export default ItemListContainer