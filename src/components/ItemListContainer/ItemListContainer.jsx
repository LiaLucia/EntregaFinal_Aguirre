import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore'

import ItemList from '../ItemList/ItemList';

import { Spinner } from 'react-bootstrap';



function ItemListContainer() {
   const [products, setProducts] = useState([])
   const [loading, setLoading] = useState(true)
   
   const {idCategory} = useParams()
    useEffect(()=>{
      setLoading(true)
      const db = getFirestore() 
      const queryCollections = collection(db, 'Products')
      const queryFilter = idCategory ? query(queryCollections, where('category','==', idCategory) ) : queryCollections    
      
      getDocs(queryFilter)
      .then(resp => setProducts(resp.docs.map(product => ({ id: product.id, ...product.data() } ) )))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))    

    }, [idCategory])
    
  return (
     <center>
        <div>
        {loading ? (
          <Spinner/>)
          :
          <ItemList products = {products}/>
        } 
        </div>
     </center>
  )  
  }

export default ItemListContainer
