import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import { Navigate, Link, useLocation, useNavigate } from "react-router-dom";
import "./LoginScreen.css";

const LoginScreen = () => {
  const { login, user, loading, googleLogin } = useContext(LoginContext);
  const navigate = useNavigate();
  const location = useLocation();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const from = location.state?.from?.pathname || "/checkout";

  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(values);
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      await googleLogin();
      navigate(from, { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  if (user?.email) {
    return <Navigate to={from} replace />;
  }

  return (
    <section className="login-screen">
      <div className="formCont">
        <div className="loginAside">
          <span className="loginBadge">Rescue Store</span>
          <h1 className="asideTitle">Tu equipo, listo para actuar.</h1>
          <p className="asideText">
            Inicia sesión para continuar con tu compra, revisar tu perfil y
            acceder más rápido al checkout.
          </p>
          <div className="asideGlow" />
        </div>

        <div className="formPanel">
          <div className="formHeader">
            <h2 className="logText">Iniciar sesión</h2>
            <p className="formSubtext">
              Accede con tu cuenta o continúa con Google.
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
                autoComplete="current-password"
              />
            </div>

            <button disabled={loading} className="loginBtn" type="submit">
              {loading ? "Ingresando..." : "Ingresar"}
            </button>

            <button
              type="button"
              onClick={handleGoogleLogin}
              className="googleBtn"
            >
              Ingresar con Google
            </button>

            <div className="bottomLinks">
              <span className="bottomText">¿No tienes cuenta?</span>
              <Link to="/register" className="registerLink">
                Crear una cuenta
              </Link>
            </div>

            {user?.mensaje && <p className="loginError">{user.mensaje}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default LoginScreen;