import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import { Link } from "react-router-dom"

const CartWidget = () => {
    const {cantidadTotal} = useContext(CartContext)

    let cantidad = cantidadTotal()

    return (
        <Link to="/cart">   
            <button className="btn btn-outline-success" type="submit">🛒 {cantidad > 0 && cantidad}</button>
        </Link>
    )
}

export default CartWidget