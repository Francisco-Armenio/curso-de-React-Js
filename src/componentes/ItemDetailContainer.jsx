import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail"
import { useParams } from "react-router-dom" 
import { getDoc, doc } from "firebase/firestore"
import db from "../database/database.js"

const ItemDetailContainer = () => {
    const [producto, setProductos] = useState({})
    const { idProducto } = useParams()

    const getProduct = async() =>{
        const docRef = doc(db, "producto", idProducto)
        const dataDb = await getDoc(docRef)
        const data = { id: dataDb.id, ...dataDb.data() }

        console.log(data)
        setProductos(data)
    }

    useEffect( ()=> {
        getProduct()
    }, [] )

   

  return (
   <ItemDetail producto={producto} />
  )
}

export default ItemDetailContainer