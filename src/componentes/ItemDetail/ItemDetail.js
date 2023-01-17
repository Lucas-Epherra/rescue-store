import { useNavigate } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import './itemDetail.css';

const ItemDetail = ({name, marca, modelo, categoria, imagen, precio, descripcion, stock}) => {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    return (
        <div className='detailCard'>
            <img className="imgDetail" src={imagen} alt={name}/>
            <h2>{name}</h2>
            <p><strong>Marca:</strong> {marca}</p>
            <p><strong>Modelo:</strong> {modelo}</p>
            <p><strong>Precio:</strong> $ {precio}</p>
            <p><strong>Descripcion:</strong> {descripcion}</p>
            <p><strong>Categoria:</strong> {categoria}</p>
            {<ItemCount/>}
            <p><strong>En Stock:</strong> {stock}</p>
            <button className='btn btn-danger' onClick={handleVolver}>Volver</button>
        </div>
    )
}

export default ItemDetail;
