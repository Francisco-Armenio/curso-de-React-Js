import { Link } from "react-router-dom";
import "./itemDetailContainer.css";

const Item = ({ product }) => {
  return (
    <Link to={"/detalle/" + product.id} className="item-card">
      <div className="item-card__image-wrapper">
        <img className="item-card__image" src={product.imagen} alt={product.nombre} />
      </div>
      <div className="item-card__info">
        <h2 className="item-card__name">{product.nombre}</h2>
        <p className="item-card__price">${product.precio}</p>
      </div>
    </Link>
  );
};

export default Item;
