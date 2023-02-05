import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item(id, name, descripcion, foto) {
  return (
    <ul key={id}>
       <Card style={{ width: '16rem' , margin:'5px'}}>
       <Card.Img variant="top" src={foto} />
        <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text> {descripcion}</Card.Text>
            <Link to ={`/detalle/${id}`}>
            <Button variant="primary"> Ver más</Button>
            </Link>
          </Card.Body>
        </Card>
  </ul>
  )
}

export default Item;