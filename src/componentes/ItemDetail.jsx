import ItemCount from "./ItemCount"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"


const ItemDetail = ( { producto } ) => {
  const {agregarProducto} = useContext(CartContext)

  const agregarAlCarrito = (contador) => {
    const productoCarrito = {...producto, cantidad:contador}
    
    agregarProducto(productoCarrito)
  }

  return (
    <div className='item'> 
      <img className='img' width={248} src={producto.imagen} alt="" />
      <h2 className='name'>{producto.nombre}</h2>
      <div>
      <p className='descripcion'>{producto.descripcion}</p>
      <p className='plata'>${producto.precio}</p>  
      <ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito}/>
      </div>
      
    </div>
  )
}

export default ItemDetail