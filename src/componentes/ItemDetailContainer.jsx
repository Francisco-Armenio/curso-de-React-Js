import { useEffect, useState } from "react"
import obtenerProductos from "../productos/productos.js"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom" 



const ItemDetailContainer = () => {
    const [producto, setProductos] = useState({})
    const { idProducto } = useParams()

    useEffect( ()=> {

        obtenerProductos()
        .then((data)=> {
            const productoEncontrado = data.find( (productoData) => productoData.id === parseInt(idProducto)) 
            setProductos(productoEncontrado)
        })
    }, [] )

   

  return (
   <ItemDetail producto={producto} />
  )
}

export default ItemDetailContainer