import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import "./itemDetailContainer.css";

const ItemDetail = ({ producto }) => {
  const { agregarProducto } = useContext(CartContext);
  const [mostrarItemCount, setMostrarItemCount] = useState(true);

  const agregarAlCarrito = (contador) => {
    const productoCarrito = { ...producto, cantidad: contador };
    agregarProducto(productoCarrito);
    setMostrarItemCount(false);
  };

  return (
    <div className="detail-container">
      <div className="detail-container__image-wrapper">
        <img className="detail-container__image" src={producto.imagen} alt={producto.nombre} />
      </div>

      <div className="detail-container__info">
        <h2 className="detail-container__name">{producto.nombre}</h2>
        <p className="detail-container__description">{producto.descripcion}</p>
        <p className="detail-container__price">${producto.precio}</p>

        {mostrarItemCount ? (
          <ItemCount stock={producto.stock} agregarAlCarrito={agregarAlCarrito} />
        ) : (
          <Link to="/cart" className="detail-container__button">
            Ir al carrito
          </Link>
        )}
      </div>
    </div>
  );
};

export default ItemDetail;
