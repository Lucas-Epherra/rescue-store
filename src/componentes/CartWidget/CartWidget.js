import './cartWidget.css';
import cart from '../../assets/cart.svg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';



function CartWidget() {

    const { itemsTotales } = useContext(CartContext)

    return (
        <Link to="/cart" className="d-flex cart">
            <img
                src={cart}
                width="30"
                height="30"
                className="align-center"
                alt="cart logo"
            />
            <p className="m-1 numProductos">{itemsTotales()}</p>
        </Link>
    );
}

export default CartWidget;
