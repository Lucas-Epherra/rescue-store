import { useContext, useState } from "react";
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
import swal from 'sweetalert';

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

  const handleSumbit = async (e) => {
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

    const orden = {
      cliente: values,
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
      const item = cart.find((item) => item.id === doc.id);

      if (doc.data().stock >= item.cantidad) {
        batch.update(doc.ref, {
          stock: doc.data().stock - item.cantidad,
        });
      } else {
        sinStock.push(item);
      }
    });

    if (sinStock.length === 0) {
      batch.commit().then(() => {
        addDoc(ordersRef, orden)
          .then((doc) => {
            setOrderId(doc.id);
            vaciarCart();
          })
          .catch((error) => console.log(error));
      });
    } else if (sinStock.length > 0) {
      return swal({
        title: "Error en la compra",
        text: "Un producto del carrito no tiene stock!",
        icon: "error",
        button: "Volver",
        dangerMode: true,
      });
    };
  };

  if (orderId) {
    return (
      <div className="container my-5 finCompra">
        <h2>Tu compra ha sido exitosa</h2>
        <hr />
        <h3>Muchas gracias por tu compra</h3>
        <hr />

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

        <button className="btn btn-primary my-3">Enviar</button>
      </form>
      <Link to="/cart" className="btn btn-danger">
        Volver al carrito
      </Link>
    </div>
  );
};

export default Checkout;
