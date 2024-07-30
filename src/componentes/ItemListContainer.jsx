import { useEffect, useState } from "react";
import ItemList from "./ItemList.jsx";
import obtenerProductos from "../productos/productos.js";
import { useParams } from "react-router-dom";


const ItemListContainer = ( {saludo} ) => {
  const [productos, setProductos] = useState ([]);
  const {idCategoria} = useParams()

  console.log(idCategoria)

  useEffect(() => {
    obtenerProductos ()
    .then((respuesta) => {
      if (idCategoria) {
        //filtrar los productos por esa categoria recibida
        const productosFiltrados = respuesta.filter( (producto)=> producto.categoria === idCategoria)
        setProductos(productosFiltrados)
      } else {
        //guardamos todos los productos
        setProductos(respuesta);
      }
    });
  }, [idCategoria])

  

  

  return (
    <div>
        <p className='titulo'>Hola, {saludo}</p>
        <ItemList productos ={productos} />       
    </div>
  );
};

export default ItemListContainer