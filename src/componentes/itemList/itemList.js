import './itemList.css';
import Item from '../item/item';

const ItemList = ({ productos }) => {

    return (

        <div className="container">
            <h2 className='title'>Nuestros Productos</h2>
            <hr />

            <section className="row">
                {productos.map((prod) => <Item key={prod.id} prod={prod}/>)}
            </section>

        </div>


    )


}

export default ItemList;