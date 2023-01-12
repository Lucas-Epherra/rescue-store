
const ItemDetail = (name,marca,modelo,categoria,image,precio,) => {
    return (
        <div>
            <h2>{name}</h2>
            <img src={image} alt={name}/>
            <p>{marca}</p>
            <p>{modelo}</p>
            <p>{categoria}</p>
            <p>Precio: ${precio}</p>
        </div>
    )
}

export default ItemDetail