import './itemList.css';
import Item from '../Item/Item';
import { Link } from 'react-router-dom';

const ItemList = ({ productos }) => {

    return (

        <div className="container">
            <h2 className='title'>Nuestros Productos</h2>
            <hr />
            
            <section className='categorias'>    
                <Link className='mx-2 btn btn-warning' to={"/productos/silbatos"}>silbatos</Link>
                <Link className='mx-2 btn btn-warning' to={"/productos/flotabilidad"}>flotabilidad</Link>
                <Link className='mx-2 btn btn-warning' to={"/productos/gorros"}>gorros</Link>
                <Link className='mx-2 btn btn-warning' to={"/productos/binoculares"}>binoculares</Link>
            </section>

            <hr />
            <section className="row">
                {productos.map((prod) => <Item key={prod.id} prod={prod}/>)}
            </section>

        </div>

                 
    )


}

export default ItemList;