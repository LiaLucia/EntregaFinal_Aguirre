import React from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'

const ItemDetailContainer = () => {
  const {idProducto} = useParams()
  return (
    <div>
      <ItemDetail idProducto = {idProducto}/>
    </div>
  )
}

export default ItemDetailContainer