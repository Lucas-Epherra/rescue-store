import "./itemCount.css";

const ItemCount = ({max,cantidad,setCantidad,onAdd}) => {

  
  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handleSumar = () => {
    cantidad < max && setCantidad(cantidad + 1);
  };


  return (
    <div className="container countCard">

      <strong>
        <p className="cantidad">Cantidad:</p>
      </strong>

      <section className="clicker mx-2">
        <button className="btn btn-outline-primary mx-2" onClick={handleRestar}> - </button>
        <span className="count">{cantidad}</span>
        <button className="btn btn-primary mx-2" onClick={handleSumar}> + </button>
        <br/>
        <button className="btn btn-success mx-2" onClick={onAdd}> Agregar al carrito</button>      
        </section>
      
    </div>
  );
};

export default ItemCount;
