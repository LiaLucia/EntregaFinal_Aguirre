import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>producto.nombre</Card.Title>
        <Card.Text>
          producto.descripcion
        </Card.Text>
        <Button variant="primary">Ver más</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;