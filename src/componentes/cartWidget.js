import './cart.css';
import cart from '../assets/cart.svg'

function CartLogo() {
    return (
        <div className="container d-flex cart">
            <img
                src={cart}
                width="30"
                height="30"
                className="d-inline-block align-center"
                alt="cart logo"
            />
            <p className="m-1 numProductos">1</p>
        </div>
    );
}

export default CartLogo;