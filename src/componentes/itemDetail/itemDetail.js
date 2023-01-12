import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './itemDetail.css';

const ItemDetail = ({name, marca, modelo, categoria, imagen, precio,stock}) => {

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    return (
        <div>
            <h2>{name}</h2>
            <img className="imgDetail my-4" src={imagen} alt={name}/>
            <p>Marca: {marca}</p>
            <p>Modelo: {modelo}</p>
            <p>Categoria: {categoria}</p>
            <p>Precio: $ {precio}</p>
            <p>En Stock: {stock}</p>

            <button className='btn btn-danger' onClick={handleVolver}>Volver</button>

            {/* ItemCount */}

        </div>
    )
}

export default ItemDetail