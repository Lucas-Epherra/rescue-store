import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCart from "../ItemCart/ItemCart";
import "./Cart.css";

const Cart = () => {
  const { cart, vaciarCart, sumarTotalCart } = useContext(CartContext);

  const totalFormateado = new Intl.NumberFormat("es-AR").format(
    sumarTotalCart()
  );

  const totalItems = cart.reduce((acc, item) => acc + item.cantidad, 0);

  return (
    <section className="cartPage container">
      {cart.length === 0 ? (
        <div className="emptyCart">
          <span className="cartBadge">Carrito</span>
          <h2 className="cartTitle">Tu carrito está vacío</h2>
          <p className="cartText">
            Todavía no agregaste productos. Explora el catálogo y equipa tu tienda
            como corresponde.
          </p>

          <Link to="/productos" className="cartPrimaryBtn">
            Ver lista de productos
          </Link>
        </div>
      ) : (
        <>
          <div className="cartHeader">
            <div>
              <span className="cartBadge">Resumen de compra</span>
              <h2 className="cartTitle">Tu carrito</h2>
              <p className="cartText">
                Revisa tus productos antes de avanzar al checkout.
              </p>
            </div>

            <button className="cartGhostBtn" onClick={vaciarCart}>
              Vaciar carrito
            </button>
          </div>

          <div className="cartLayout">
            <div className="cartItemsPanel">
              {cart.map((item) => (
                <ItemCart key={item.id} {...item} />
              ))}
            </div>

            <aside className="cartSummary">
              <h3 className="summaryTitle">Resumen</h3>

              <div className="summaryRow">
                <span>Productos</span>
                <strong>{totalItems}</strong>
              </div>

              <div className="summaryRow">
                <span>Subtotal</span>
                <strong>${totalFormateado}</strong>
              </div>

              <div className="summaryDivider" />

              <div className="summaryRow totalRow">
                <span>Total</span>
                <strong>${totalFormateado}</strong>
              </div>

              <div className="summaryActions">
                <Link to="/checkout" className="cartPrimaryBtn">
                  Terminar mi compra
                </Link>

                <Link to="/productos" className="cartSecondaryBtn">
                  Continuar comprando
                </Link>
              </div>
            </aside>
          </div>
        </>
      )}
    </section>
  );
};

export default Cart;