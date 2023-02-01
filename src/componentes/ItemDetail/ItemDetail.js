import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import "./itemDetail.css";

const ItemDetail = ({id,name,marca,modelo,categoria,imagen,precio,descripcion,stock,}) => {

    const [cantidad, setCantidad] = useState(1);

    const navigate = useNavigate();

    const handleVolver = () => {
        navigate(-1);
    };

    const handleAgregar = () => {
        console.log({
                id,name,marca,modelo,categoria,imagen,precio,descripcion,stock,cantidad
            });
    };

    return (
        <div className="detailCard">

            <img className="imgDetail" src={imagen} alt={name} />
            <h2>{name}</h2>

            <p> <strong>Marca:</strong> {marca} </p>
            <p> <strong>Modelo:</strong> {modelo} </p>
            <p> <strong>Precio:</strong> $ {precio} </p>
            <p className="desc"> <strong>Descripcion:</strong> {descripcion} </p>
            <p> <strong>Categoria:</strong> {categoria} </p>

            {<ItemCount
                    max={stock}
                    cantidad={cantidad}
                    setCantidad={setCantidad}
                    onAdd={handleAgregar}
                />}

            <p>
                <strong>En Stock:</strong> {stock}
            </p>
            <button className="btn btn-danger" onClick={handleVolver}>
                Volver
            </button>
        </div>
    );
};

export default ItemDetail;
