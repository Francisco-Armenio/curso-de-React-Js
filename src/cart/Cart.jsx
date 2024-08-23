import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"
import './cart.css';

const Cart = () => {
    const {carrito, precioTotal, borrarProducto, vaciarCarrito} = useContext(CartContext)

    if(carrito.length === 0){
        return(
            <div className="sinProductos">
                <div className="contenido">
                    <h2>¡Empezá un carrito de compras!</h2>
                    <h3>Sumá productos y conseguí envío gratis.</h3>
                    <Link to="/" className="button-empty-cart">Descubrir productos</Link>
                </div>
            </div>
        )
    }

  return (
    <div className="cart">
        <ul className="cart-list">
            {carrito.map((producto) =>(
                <li className="cart-item">
                    <img width={248} src={producto.imagen} alt="" />
                    <p>{producto.nombre}</p>
                    <p>Cantidad: {producto.cantidad}</p>
                    <p>Precio: ${producto.precio}</p> 
                    <p>Precio parcial: ${producto.cantidad * producto.precio}</p> 
                    <button onClick={ () => borrarProducto (producto.id)}>🗑️</button>
                </li>
            ))}
        </ul>

        <div className="cart-controls">
              <h2>Precio total: ${precioTotal()}</h2>
            <div className="buttons">
                <button onClick={vaciarCarrito} className="button-cart">Vaciar carrito</button>
                <Link to="/checkout" className="button-cart"> Confirmar mi compra </Link>
            </div>
           
        </div>
        
        
    </div>
  )
}

export default Cart