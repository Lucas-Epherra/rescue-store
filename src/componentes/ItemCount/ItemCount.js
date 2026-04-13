import "./itemCount.css";

const ItemCount = ({ max, cantidad, setCantidad, onAdd }) => {
  const sinStock = max <= 0;

  const handleRestar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const handleSumar = () => {
    if (cantidad < max) {
      setCantidad(cantidad + 1);
    }
  };

  return (
    <div className="countCard">
      <div className="countHeader">
        <span className="countLabel">Cantidad</span>
        <span className="countStock">
          {sinStock ? "Sin stock" : `Máximo: ${max}`}
        </span>
      </div>

      <div className="clicker">
        <button
          type="button"
          className="countBtn"
          onClick={handleRestar}
          disabled={cantidad <= 1 || sinStock}
          aria-label="Restar cantidad"
        >
          −
        </button>

        <span className="count">{cantidad}</span>

        <button
          type="button"
          className="countBtn countBtnPrimary"
          onClick={handleSumar}
          disabled={cantidad >= max || sinStock}
          aria-label="Sumar cantidad"
        >
          +
        </button>
      </div>

      <button
        type="button"
        className="addCartBtn"
        onClick={onAdd}
        disabled={sinStock}
      >
        {sinStock ? "Producto sin stock" : "Agregar al carrito"}
      </button>
    </div>
  );
};

export default ItemCount;