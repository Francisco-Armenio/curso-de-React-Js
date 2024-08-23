import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"


const Cart = () => {
    const {carrito, precioTotal, borrarProducto, vaciarCarrito} = useContext(CartContext)

    if(carrito.length === 0){
        return(
            <div className="sinProductos">
                <div className="contenido">
                    <h2>¡Empezá un carrito de compras!</h2>
                    <h3>Sumá productos y conseguí envío gratis.</h3>
                    <Link to="/">Descubrir productos</Link>
                </div>
            </div>
        )
    }

  return (
    <div>
        <ul className="carrito">
            {carrito.map((producto) =>(
                <li className="product">
                    <img width={248} src={producto.imagen} alt="" />
                    <p>{producto.nombre}</p>
                    <p>Cantidad: {producto.cantidad}</p>
                    <p>Precio: ${producto.precio}</p> 
                    <p>Precio parcial: ${producto.cantidad * producto.precio}</p> 
                    <button onClick={ () => borrarProducto (producto.id)}>🗑️</button>
                </li>
            ))}
        </ul>

        <h2>Precio total: ${precioTotal()}</h2>
        <button onClick={vaciarCarrito}>Vaciar carrito</button>
    </div>
  )
}

export default Cart