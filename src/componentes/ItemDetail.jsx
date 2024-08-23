import ItemCount from "./ItemCount"
import { useContext, useState } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"


const ItemDetail = ( { producto } ) => {
  const {agregarProducto} = useContext(CartContext);
  const [mostrarItemCount, setMostrarItemCount] = useState(true)

  const agregarAlCarrito = (contador) => {
    const productoCarrito = {...producto, cantidad:contador}
    
    agregarProducto(productoCarrito);

    setMostrarItemCount(false)
  }

  return (
    <div className='item'>
      <div>
        <img className='img' width={248} src={producto.imagen} alt="" />
      </div> 
      <div>
      <h2 className='name'>{producto.nombre}</h2>
      <p className='descripcion'>{producto.descripcion}</p>
      <p className='plata'>${producto.precio}</p>  
      {
        mostrarItemCount ? (<ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito}/> 
        ) : (
        <Link to="/cart">ir al carrito</Link>
      )
      }

      
      </div>
      
    </div>
  )
}

export default ItemDetail