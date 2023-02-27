import ItemDetailItem from '../ItemDetailItem/ItemDetailItem';

const ItemDetail = ({product}) => {
  
  return (
    <center>
      <div>
        <ItemDetailItem  key = {product.id} product = {product}/>
      </div>
            


    </center>
  )
}

export default ItemDetail
