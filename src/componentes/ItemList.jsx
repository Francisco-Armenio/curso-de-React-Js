import React from 'react'
import Item  from './Item'

const ItemList = ( {productos}) => {
  return (
    <div className='contenedorItem'>{
        productos.map( (product) => (
        <Item key={product.id} product ={product}/>
      ))}
    </div>
  )
}

export default ItemList