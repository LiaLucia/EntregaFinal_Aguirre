import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import {useState} from 'react';

import { Spinner } from 'react-bootstrap';
import { gFetch } from "../../utils/gFetch"
import Item from '../Item/Item';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




function ItemList() {
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
      <div>
        {loading ? (
          <Spinner/>)
          :
          <div style = {{display:'flex', flexDirection:'row', flexWrap:'wrap'}}> 
            {productos.map((producto) => <ul key={producto.id}>
                                          <Card style={{ width: '16rem' , margin:'5px'}}>
                                            <Card.Img variant="top" src={producto.foto} />
                                              <Card.Body>
                                                <Card.Title>{producto.name}</Card.Title>
                                                <Link to ={`/detalle/${producto.id}`}>
                                                  <Button variant="primary"> Ver más</Button>
                                                </Link>
                                              </Card.Body>
                                          </Card>
                                        </ul>)}
          </div>
        } 
        </div>
    )
}

  export default ItemList

{/*  <Item 
                                      key = {producto.id} 
                                      id = {producto.id} 
                                      name = {producto.name} 
                                      descripcion = {producto.descripcion} 
                                      foto = {producto.foto}
                                        />*/}
      