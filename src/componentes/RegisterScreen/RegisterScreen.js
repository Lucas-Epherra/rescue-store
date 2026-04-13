import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import { Link, Navigate } from "react-router-dom";
import "./RegisterScreen.css";

const RegisterScreen = () => {
  const { user, loading, register } = useContext(LoginContext);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await register(values);
    } catch (error) {
      console.log(error);
    }
  };

  if (user?.email) {
    return <Navigate to="/perfil" replace />;
  }

  return (
    <section className="register-screen">
      <div className="registerCont">
        <div className="registerAside">
          <span className="registerBadge">Rescue Store</span>
          <h1 className="asideTitle">Crea tu cuenta y entra en acción.</h1>
          <p className="asideText">
            Regístrate para guardar tus datos, avanzar más rápido en tus compras
            y acceder a tu perfil cuando lo necesites.
          </p>
          <div className="asideGlow" />
        </div>

        <div className="formPanel">
          <div className="formHeader">
            <h2 className="logText">Crear cuenta</h2>
            <p className="formSubtext">
              Completa tus datos para registrarte en Rescue Store.
            </p>
          </div>

          <form className="formBox" onSubmit={handleSubmit}>
            <div className="fieldGroup">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                className="inputs"
                value={values.email}
                type="email"
                onChange={handleInputChange}
                name="email"
                placeholder="tuemail@ejemplo.com"
                autoComplete="email"
              />
            </div>

            <div className="fieldGroup">
              <label htmlFor="password">Contraseña</label>
              <input
                id="password"
                className="inputs"
                value={values.password}
                type="password"
                onChange={handleInputChange}
                name="password"
                placeholder="••••••••"
                autoComplete="new-password"
              />
            </div>

            <button disabled={loading} className="registerBtn" type="submit">
              {loading ? "Creando cuenta..." : "Crear cuenta"}
            </button>

            {user?.mensaje && <p className="registerError">{user.mensaje}</p>}
          </form>

          <div className="bottomLinks">
            <span className="bottomText">¿Ya tienes una cuenta?</span>
            <Link to="/login" className="loginLink">
              Iniciar sesión
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterScreen;