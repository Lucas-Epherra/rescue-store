import './item.css';


const Item = ({prod}) => {

    return (


        <div className='col-2 prodCard' >

            <img className='imgProd' src={prod.imagen} alt={prod.marca + prod.modelo} />
            <p>Marca: {prod.marca}</p>
            <p>Modelo: {prod.modelo}</p>
            <p>Categoria: {prod.categoria}</p>
            <p>Precio: ${prod.precio}</p>
            <button className='btn btn-outline-primary m-4'>Ver Mas</button>

        </div>

    )
}



export default Item;