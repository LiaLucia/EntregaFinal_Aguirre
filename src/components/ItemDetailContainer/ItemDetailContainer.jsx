import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore';

import { Spinner } from 'react-bootstrap';
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {

  const [product, setProduct] = useState({}) //{}
  const {idProduct} = useParams()
  const [loading, setLoading] = useState(true)

  useEffect(()=>{        
    setLoading(true)
    const db = getFirestore() 
    const query = idProduct ? doc(db, 'Products', idProduct) : setLoading(false)
    getDoc(query)
    .then(resp => setProduct( { id: resp.id, ...resp.data() } ))
    .catch(err => console.error(err))
    .finally(() => setLoading(false))
}, [])

  return (
    <div>
      {loading ? (
          <center>
              <Spinner/>
          </center>)
          :
          <ItemDetail key = {product.id} product = {product}/>
            
          
      }
    </div>
  )
}

export default ItemDetailContainer