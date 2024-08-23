import { useEffect, useState } from "react";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import db from "../database/database.js";


const ItemListContainer = ( {saludo} ) => {
  const [productos, setProductos] = useState ([]);
  const {idCategoria} = useParams()

  const getProducts = async() => {
    const productosRef = collection(db, "producto")
    const dataDb = await getDocs(productosRef)
    const data = dataDb.docs.map( ( productoDb) =>{
      return {id: productoDb.id, ...productoDb.data()};
    });

    setProductos(data)
  }

  const getProductsByCategory = async () => {
    const productosRef = collection(db,"producto");
    const q = query(productosRef, where("categoria", "==", idCategoria));
    const dataDb = await getDocs(q);

    const data = dataDb.docs.map((productDb) =>{
      return { id: productDb, ...productDb.data()}
    });

    setProductos(data)
  }

  useEffect(() => {
    if (idCategoria){
      getProductsByCategory();
    }else{
      getProducts();
    }
    
  }, [idCategoria])

  

  

  return (
    <div>
        <p className='titulo'>Hola, {saludo}</p>
        <ItemList productos ={productos} />       
    </div>
  );
};

export default ItemListContainer