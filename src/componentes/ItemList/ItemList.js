import './itemList.css';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';

const ItemList = ({ productos }) => {

    return (

        <div className="container">
            <h2 className='title'>Nuestros Productos</h2>
            <hr />
            
            <section className='categorias'>    
                <Link className='mx-2 my-2 btn btn-warning' to={"/productos"}>Todos Los Productos</Link>
                <Link className='mx-2 my-2 btn btn-warning' to={"/productos/silbatos"}>Silbatos</Link>
                <Link className='mx-2 my-2 btn btn-warning' to={"/productos/flotabilidad"}>Flotabilidad</Link>
                <Link className='mx-2 my-2 btn btn-warning' to={"/productos/gorros"}>Gorros</Link>
                <Link className='mx-2 my-2 btn btn-warning' to={"/productos/binoculares"}>Binoculares</Link>
            </section>

            <hr />
            <section className="itemList">
                {productos.map((prod) => <Item key={prod.id} prod={prod}/>)}
            </section>

        </div>

                 
    )


}

export default ItemList;
