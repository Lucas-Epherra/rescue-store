import './itemDetail.css';

const ItemDetail = ({name, marca, modelo, categoria, imagen, precio,stock}) => {
    return (
        <div>
            <h2>{name}</h2>
            <img className="imgDetail my-4" src={imagen} alt={name}/>
            <p>Marca: {marca}</p>
            <p>Modelo: {modelo}</p>
            <p>Categoria: {categoria}</p>
            <p>Precio: $ {precio}</p>
            <p>En Stock: {stock}</p>
            {/* ItemCount */}
        </div>
    )
}

export default ItemDetail