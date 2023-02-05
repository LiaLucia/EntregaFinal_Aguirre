import React from 'react'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const {idProducto} = useParams()
  
  return (
    <div>ItemDetailContainer</div>
  )
}

export default ItemDetailContainer