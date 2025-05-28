import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const { cantidadTotal } = useContext(CartContext)

    let cantidad = cantidadTotal()

    return (
        <Link to="/cart" className="cart-button">
            🛒 {cantidad > 0 && cantidad}
        </Link>

    )
}

export default CartWidget