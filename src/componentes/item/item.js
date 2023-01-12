import './item.css';
import {Link} from 'react-router-dom'


const Item = ({prod}) => {

    return (

        <div className='col-2 prodCard' >

            <h4 className="titleCard"> {prod.name}</h4>
            <img className='imgProd ' src={prod.imagen} alt={prod.marca + prod.modelo} />
            <p>Valor: ${prod.precio}</p>
            <Link to={`/detalle/${prod.id}`}><button className='btn btn-warning m-4'>Ver Mas</button></Link>

        </div>

    )
}



export default Item;