import { createContext, useState } from "react";

const CartContext = createContext()

const CartProvider = ({ children }) => {
    const[carrito, setCarrito] = useState([])

    const agregarProducto = (productoNuevo) => {
        const condicion = estaEnElCarrito(productoNuevo.id)
        if(condicion){
            let nuevoCarrito = [...carrito]
            nuevoCarrito.forEach((producto)=>{
                if(producto.id === productoNuevo.id){
                    producto.cantidad = producto.cantidad + productoNuevo.cantidad
                }
            })

            setCarrito(nuevoCarrito)
        }else{
            
            setCarrito([...carrito, productoNuevo])
        }


        
    }

    const estaEnElCarrito = (idProducto) => {
        const condicional = carrito.some( (producto) => producto.id === idProducto)
        return condicional
    }
    
    const cantidadTotal = () => {
        const totalProductos = carrito.reduce( (total, productoCarrito) => total + productoCarrito.cantidad, 0)
        return totalProductos
    }

    const precioTotal = () => {
        const precio = carrito.reduce((total,producto) => total + ( producto.cantidad * producto.precio), 0)
        return precio
    }

    const borrarProducto = (idProducto) =>{
        const productosFiltrados = carrito.filter( (producto) => producto.id !== idProducto)
        setCarrito(productosFiltrados)
    }

    const vaciarCarrito = () =>{
        setCarrito([])
    }

    return(
        <CartContext.Provider value={{carrito,agregarProducto, cantidadTotal, precioTotal, borrarProducto, vaciarCarrito}}>
            {children}
        </CartContext.Provider>
    )
}


export {CartProvider, CartContext}