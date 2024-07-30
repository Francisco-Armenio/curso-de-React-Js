import React from 'react'

const ItemDetail = ( { producto } ) => {
  return (
    <div className='item'> 
      <img className='img' width={248} src={producto.imagen} alt="" />
      <h2 className='name'>{producto.nombre}</h2>
      <div>
      <p className='descripcion'>{producto.descripcion}</p>
      <p className='plata'>${producto.precio}</p>  
      </div>
      
    </div>
  )
}

export default ItemDetail