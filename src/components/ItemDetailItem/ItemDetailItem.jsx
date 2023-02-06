import { useState } from 'react'

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetailItem = (producto) => {
  const [count, setCount] = useState(0);


    const handleCount = () => {
        setCount(count + 1);
    }
  return (
    <ul key={producto.producto.id}>
      <Card style={{ width: '26rem' , margin:'5px'}}>
        <Card.Body>
          <Card.Title>{producto.producto.name}</Card.Title>
          <Card.Img variant="top" src={producto.producto.foto} />
          <Card.Text>
            {producto.producto.descripcion}
          </Card.Text>
          <Card.Text>
            $ {producto.producto.price}
          </Card.Text>
          <Button variant="primary"  >Agregar al carrito</Button>
        </Card.Body>
      </Card>
</ul>
  )
}

export default ItemDetailItem
