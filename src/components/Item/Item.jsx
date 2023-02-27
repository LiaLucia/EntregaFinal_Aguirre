import { Link } from 'react-router-dom';
import { memo } from 'react';

import Card from 'react-bootstrap/Card';

import './Item.css'


const Item = memo(({product}) => {
  return (
    <ul>
       <Card className="cards">
       <Link to ={`/detalle/${product.id}`} className="item">
       <Card.Img variant="top" src={product.pic} />
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text> {product.desc}</Card.Text>         
          </Card.Body>
          </Link>
        </Card>
  </ul>
  )

  }
)
export default Item;