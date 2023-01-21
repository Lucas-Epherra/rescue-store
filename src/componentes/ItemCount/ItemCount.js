import { useState } from "react";
import "./itemCount.css";

const ItemCount = () => {
  const [cantidad, setCantidad] = useState(1);

  const restar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const sumar = () => {
    cantidad < 20 && setCantidad(cantidad + 1);
  };

  return (
    <div className="container countCard">
      <strong>
        <p>Cantidad:</p>
      </strong>

      <section className="clicker mx-2">
        <button className="btn btn-secondary mx-2" onClick={restar}> - </button>
        <span className="count">{cantidad}</span>
        <button className="btn btn-secondary mx-2" onClick={sumar}> + </button>
      </section>
    </div>
  );
};

export default ItemCount;
