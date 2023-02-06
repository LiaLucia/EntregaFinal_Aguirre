import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item(producto) {

  return (
    <ul key={producto.producto.id}>
       <Card style={{ width: '16rem' , margin:'5px'}}>
       <Card.Img variant="top" src={producto.producto.foto} />
        <Card.Body>
            <Card.Title>{producto.producto.name}</Card.Title>
            <Card.Text> {producto.producto.descripcion}</Card.Text>
            <Link to ={`/detalle/${producto.producto.id}`}>
            <Button variant="primary"> Ver más</Button>
            </Link>
          </Card.Body>
        </Card>
  </ul>
  )
}

export default Item;