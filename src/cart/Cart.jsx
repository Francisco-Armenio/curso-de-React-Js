import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import './cart.css';

const Cart = () => {
    const { carrito, precioTotal, borrarProducto, vaciarCarrito } = useContext(CartContext);

    if (carrito.length === 0) {
        return (
            <div className="cart-empty">
                <div className="cart-empty__content">
                    <h2>¡Empezá un carrito de compras!</h2>
                    <h3>Sumá productos y conseguí envío gratis.</h3>
                    <Link to="/" className="cart-empty__button">Descubrir productos</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="cart">
            <ul className="cart__list">
                {carrito.map((producto) => (
                    <li key={producto.id} className="cart__item">
                        <img
                            src={producto.imagen}
                            alt={producto.nombre}
                            className="cart__item-image"
                            width={248}
                        />
                        <div className="cart__item-details">
                            <p className="cart__item-name">{producto.nombre}</p>
                            <p className="cart__item-qty">Cantidad: {producto.cantidad}</p>
                            <p className="cart__item-price">Precio: ${producto.precio}</p>
                            <p className="cart__item-subtotal">Subtotal: ${producto.cantidad * producto.precio}</p>
                            <button onClick={() => borrarProducto(producto.id)} className="cart__item-delete">
                                🗑️
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            <div className="cart__summary">
                <h2 className="cart__total">Total: ${precioTotal()}</h2>
                <div className="cart__buttons">
                    <button onClick={vaciarCarrito} className="cart__button cart__button--clear">
                        Vaciar carrito
                    </button>
                    <Link to="/checkout" className="cart__button cart__button--checkout">
                        Confirmar mi compra
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Cart;
