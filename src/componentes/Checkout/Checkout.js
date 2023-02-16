import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link, Navigate } from "react-router-dom";
import "./Checkout.css";
import { db } from "../../firebase/config";
import { collection, addDoc, updateDoc, getDoc, doc } from "firebase/firestore";

const Checkout = () => {
  const { cart, sumarTotalCart, vaciarCart } = useContext(CartContext);

  const [values, setValues] = useState({
    nombre: "",
    direccion: "",
    email: "",
  });

  const [orderId, setOrderId] = useState(null);

  const [error, setError] = useState({
    nombre: true,
    direccion: true,
    email: true,
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSumbit = (e) => {
    e.preventDefault();

    //validacion

    if (values.nombre.length < 2) {
      setError({
        nombre: false,
      });
      return;
    }

    if (values.direccion.length < 2) {
      setError({
        direccion: false,
      });
      return;
    }

    if (values.email.length < 5) {
      setError({
        email: false,
      });
      return;
    }

    console.log(error);

    const orden = {
      cliente: values,
      items: cart,
      total: sumarTotalCart(),
    };

    const ordersRef = collection(db, "orders");
    const productosRef = collection(db, "productos");
    cart.forEach((prod) => {
      const docRef = doc(productosRef, prod.id);
      getDoc(docRef).then((doc) => {
        if (doc.data().stock - prod.cantidad >= 0) {
          updateDoc(docRef, { stock: doc.data().stock - prod.cantidad });
        } else {
          alert("No hay mas stock");
        }
      });
   
    });

    addDoc(ordersRef, orden)
      .then((doc) => {
        setOrderId(doc.id);
        vaciarCart();
      })
      .catch((error) => console.log(error));
  };

  if (orderId) {
    return (
      <div className="container my-5 finCompra">
        <h2>Tu compra ha sido exitosa</h2>
        <hr />
        <p>Muchas gracias por tu compra</p>
        <p>
          <strong>Tu codigo de orden es :</strong> {orderId}
        </p>
        <Link to="/" className="btn btn-success">
          Volver al inicio
        </Link>
      </div>
    );
  }

  if (
    error.direccion === false ||
    error.email === false ||
    error.nombre === false
  ) {
    return (
      <div className="container my-5">
        <h2>Terminar mi compra</h2>
        <hr />
        <form onSubmit={handleSumbit}>
          <label>Nombre :</label>
          <input
            className="form-control my-2"
            onChange={handleInputChange}
            type="text"
            name="nombre"
            values={values.nombre}
            placeholder="Tu nombre"
          />
          {error.nombre === false ? (
            <p className="errorMsj">Ha ocurrido un error, nombre invalido</p>
          ) : (
            ""
          )}

          <label>Direccion :</label>
          <input
            className="form-control my-2"
            onChange={handleInputChange}
            type="text"
            name="direccion"
            values={values.direccion}
            placeholder="Tu direccion"
          />
          {error.direccion === false ? (
            <p className="errorMsj">Ha ocurrido un error, direccion invalida</p>
          ) : (
            ""
          )}

          <label>Email :</label>
          <input
            className="form-control my-2"
            onChange={handleInputChange}
            type="email"
            name="email"
            values={values.email}
            placeholder="Tu email"
          />
          {error.email === false ? (
            <p className="errorMsj">Ha ocurrido un error, email invalido</p>
          ) : (
            ""
          )}

          <button className="btn btn-primary mx-3 my-3">Enviar</button>
        </form>
        <Link to="/cart" className="btn btn-danger">
          Volver al carrito
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    <Navigate to="/" />;
  }

  return (
    <div className="container my-5">
      <h2>Terminar mi compra</h2>
      <hr />
      <form onSubmit={handleSumbit}>
        <label>Nombre :</label>
        <input
          className="form-control my-2"
          onChange={handleInputChange}
          type="text"
          name="nombre"
          values={values.nombre}
          placeholder="Tu nombre"
        />

        <label>Direccion :</label>
        <input
          className="form-control my-2"
          onChange={handleInputChange}
          type="text"
          name="direccion"
          values={values.direccion}
          placeholder="Tu direccion"
        />

        <label>Email :</label>
        <input
          className="form-control my-2"
          onChange={handleInputChange}
          type="email"
          name="email"
          values={values.email}
          placeholder="Tu email"
        />

        <button className="btn btn-primary mx-3 my-3">Enviar</button>
      </form>
      <Link to="/cart" className="btn btn-danger">
        Volver al carrito
      </Link>
    </div>
  );
};

export default Checkout;
