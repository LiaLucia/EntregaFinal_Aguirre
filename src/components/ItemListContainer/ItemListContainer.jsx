import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ItemList from '../ItemList/ItemList';
import { gFetch } from "../../utils/gFetch"

import { Spinner } from 'react-bootstrap';



function ItemListContainer() {
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
     <center>
        <div>
        {loading ? (
          <Spinner/>)
          :
          <ItemList producto = {productos}/>
        } 
        </div>
     </center>
  )  
  }

export default ItemListContainer
