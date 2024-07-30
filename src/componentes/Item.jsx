import { Link } from "react-router-dom";

const Item = ({product}) => {
  return (
    <Link to={"/detalle/" + product.id} className='producto'>
        <img className='imagenes' width={200} src={product.imagen} alt="" />
        <h2 className='nombre'>{product.nombre}</h2>
        <p className="precio">${product.precio}</p>  
    </Link>
  );
};
export default Item;