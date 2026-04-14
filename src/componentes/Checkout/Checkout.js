import { useContext, useMemo, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link, Navigate } from "react-router-dom";
import "./Checkout.css";
import { db } from "../../firebase/config";
import {
  collection,
  addDoc,
  where,
  documentId,
  getDocs,
  writeBatch,
  query,
} from "firebase/firestore";
import swal from "sweetalert";

const initialValues = {
  nombre: "",
  direccion: "",
  email: "",
};

const Checkout = () => {
  const { cart, sumarTotalCart, vaciarCart } = useContext(CartContext);

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [orderId, setOrderId] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalFormateado = useMemo(() => {
    return new Intl.NumberFormat("es-AR").format(sumarTotalCart());
  }, [sumarTotalCart]);

  const totalItems = useMemo(() => {
    return cart.reduce((acc, item) => acc + item.cantidad, 0);
  }, [cart]);

  const validateForm = () => {
    const newErrors = {};

    if (values.nombre.trim().length < 2) {
      newErrors.nombre = "Ingresa un nombre válido.";
    }

    if (values.direccion.trim().length < 5) {
      newErrors.direccion = "Ingresa una dirección válida.";
    }

    if (!/\S+@\S+\.\S+/.test(values.email.trim())) {
      newErrors.email = "Ingresa un email válido.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const orden = {
        cliente: {
          nombre: values.nombre.trim(),
          direccion: values.direccion.trim(),
          email: values.email.trim(),
        },
        items: cart,
        total: sumarTotalCart(),
      };

      const batch = writeBatch(db);
      const ordersRef = collection(db, "orders");
      const productosRef = collection(db, "productos");

      const sinStock = [];

      const itemsRef = query(
        productosRef,
        where(
          documentId(),
          "in",
          cart.map((prod) => prod.id)
        )
      );

      const productos = await getDocs(itemsRef);

      productos.docs.forEach((doc) => {
        const item = cart.find((prod) => prod.id === doc.id);

        if (!item) return;

        if (doc.data().stock >= item.cantidad) {
          batch.update(doc.ref, {
            stock: doc.data().stock - item.cantidad,
          });
        } else {
          sinStock.push(item);
        }
      });

      if (sinStock.length > 0) {
        await swal({
          title: "Error en la compra",
          text: "Uno o más productos de tu carrito ya no tienen stock disponible.",
          icon: "error",
          button: "Volver",
          dangerMode: true,
        });

        setIsSubmitting(false);
        return;
      }

      await batch.commit();
      const doc = await addDoc(ordersRef, orden);

      setOrderId(doc.id);
      vaciarCart();
      setValues(initialValues);
    } catch (error) {
      console.error(error);

      await swal({
        title: "Algo salió mal",
        text: "No se pudo completar la compra. Intenta nuevamente.",
        icon: "error",
        button: "Entendido",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (orderId) {
    return (
      <section className="checkoutPage">
        <div className="checkoutContainer">
          <div className="checkoutSuccessCard finCompra">
            <span className="checkoutBadge">Compra confirmada</span>
            <h2 className="checkoutTitle">Tu compra fue exitosa</h2>
            <p className="checkoutText">
              Gracias por tu compra. Tu pedido ya quedó registrado correctamente.
            </p>

            <div className="successOrderBox">
              <span className="successOrderLabel">Código de orden</span>
              <strong className="successOrderId">{orderId}</strong>
            </div>

            <Link to="/" className="checkoutPrimaryBtn">
              Volver al inicio
            </Link>
          </div>
        </div>
      </section>
    );
  }

  if (cart.length === 0) {
    return <Navigate to="/" />;
  }

  return (
    <section className="checkoutPage">
      <div className="checkoutContainer">
        <div className="checkoutLayout">
          <div className="checkoutFormCard">
            <span className="checkoutBadge">Checkout</span>
            <h2 className="checkoutTitle">Terminar mi compra</h2>
            <p className="checkoutText">
              Completa tus datos para finalizar el pedido de forma segura.
            </p>

            <form className="checkoutForm" onSubmit={handleSubmit} noValidate>
              <div className="checkoutField">
                <label htmlFor="nombre" className="checkoutLabel">
                  Nombre
                </label>
                <input
                  id="nombre"
                  className={`checkoutInput ${errors.nombre ? "inputError" : ""}`}
                  onChange={handleInputChange}
                  type="text"
                  name="nombre"
                  value={values.nombre}
                  placeholder="Tu nombre"
                />
                {errors.nombre && <p className="errorMsj">{errors.nombre}</p>}
              </div>

              <div className="checkoutField">
                <label htmlFor="direccion" className="checkoutLabel">
                  Dirección
                </label>
                <input
                  id="direccion"
                  className={`checkoutInput ${errors.direccion ? "inputError" : ""}`}
                  onChange={handleInputChange}
                  type="text"
                  name="direccion"
                  value={values.direccion}
                  placeholder="Tu dirección"
                />
                {errors.direccion && (
                  <p className="errorMsj">{errors.direccion}</p>
                )}
              </div>

              <div className="checkoutField">
                <label htmlFor="email" className="checkoutLabel">
                  Email
                </label>
                <input
                  id="email"
                  className={`checkoutInput ${errors.email ? "inputError" : ""}`}
                  onChange={handleInputChange}
                  type="email"
                  name="email"
                  value={values.email}
                  placeholder="Tu email"
                />
                {errors.email && <p className="errorMsj">{errors.email}</p>}
              </div>

              <div className="checkoutActions">
                <button
                  type="submit"
                  className="checkoutPrimaryBtn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Procesando compra..." : "Confirmar compra"}
                </button>

                <Link to="/cart" className="checkoutSecondaryBtn">
                  Volver al carrito
                </Link>
              </div>
            </form>
          </div>

          <aside className="checkoutSummaryCard">
            <h3 className="summaryTitle">Resumen</h3>

            <div className="summaryRow">
              <span>Productos</span>
              <strong>{totalItems}</strong>
            </div>

            <div className="summaryRow">
              <span>Total</span>
              <strong>${totalFormateado}</strong>
            </div>

            <div className="summaryDivider" />

            <p className="summaryText">
              Verifica tus datos antes de confirmar. Una vez generada la orden,
              el stock se descuenta automáticamente.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Checkout;