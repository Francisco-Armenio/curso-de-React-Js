import { useState } from "react";

const ItemCount = ({ stock, agregarAlCarrito }) => {
  const [count, setCount] = useState(1);

  const aumentar = () => {
    if (count < stock) setCount(count + 1);
  };

  const disminuir = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="itemcount-container">
      <div className="itemcount-controls">
        <button className="itemcount-btn" onClick={disminuir}>-</button>
        <p className="itemcount-number">{count}</p>
        <button className="itemcount-btn" onClick={aumentar}>+</button>
      </div>
      <button className="itemcount-add-btn" onClick={() => agregarAlCarrito(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
