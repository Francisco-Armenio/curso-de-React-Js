import { useEffect, useState } from "react";
import ItemList from "./ItemList.jsx";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import db from "../database/database.js";

const ItemListContainer = ({ saludo }) => {
  const [productos, setProductos] = useState([]);
  const { idCategoria } = useParams();

  const getProducts = async () => {
    try {
      const productosRef = collection(db, "producto"); // o "productos" si es plural
      const dataDb = await getDocs(productosRef);
      const data = dataDb.docs.map((productoDb) => ({
        id: productoDb.id,
        ...productoDb.data(),
      }));

      setProductos(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const getProductsByCategory = async () => {
    try {
      const productosRef = collection(db, "producto"); // o "productos"
      const q = query(productosRef, where("categoria", "==", idCategoria));
      const dataDb = await getDocs(q);
      const data = dataDb.docs.map((productDb) => ({
        id: productDb.id,
        ...productDb.data(),
      }));

      setProductos(data);
    } catch (error) {
      console.error("Error fetching products by category:", error);
    }
  };

  useEffect(() => {
    if (idCategoria) {
      getProductsByCategory();
    } else {
      getProducts();
    }
  }, [idCategoria]);

  return (
    <div>
      <p className="titulo">Hola, {saludo}</p>
      <ItemList productos={productos} />
    </div>
  );
};

export default ItemListContainer;
