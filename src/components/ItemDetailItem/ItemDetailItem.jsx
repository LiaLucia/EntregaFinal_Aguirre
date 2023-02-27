import { useCartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';

import './ItemDetailItem.css'
import Card from 'react-bootstrap/Card';


const ItemDetailItem = ( {product} ) => {

  const { addCart } = useCartContext()

  const onAdd = (cant) => {
    addCart( { ...product, total: cant })
  }
  
  return (
    <div className ="row"> 
      <div className="col-md-6">
        <ul >
          <Card className ="Card">
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Img variant="top" src={product.pic} />
              <Card.Text>
                {product.desc}
              </Card.Text>
              <Card.Text>
                $ {product.price}
              </Card.Text>
            </Card.Body>
          </Card>
          
        </ul>
    </div>
    
    <div className="col-md-6">
      <ItemCount initial={1} stock = {product.stock} onAdd={onAdd}/>
    </div>
  </div>
  )
}

export default ItemDetailItem
