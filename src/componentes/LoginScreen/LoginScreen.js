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
    <div className="login-screen">
      <div className="container formCont">
        <h2 className="logText">Bienvenido a Rescue Store</h2>

        <form className="formBox" onSubmit={handleSubmit}>
          <label>Email :</label>
          <input
            className="form-control my-2 inputs"
            value={values.email}
            type="email"
            onChange={handleInputChange}
            name="email"
          />

          <label>Contraseña :</label>
          <input
            className="form-control my-2 inputs"
            value={values.password}
            type="password"
            onChange={handleInputChange}
            name="password"
          />

          <button disabled={loading} className="btn btn-primary my-3">
            Ingresar
          </button>

          <button
            type="button"
            onClick={handleGoogleLogin}
            className="btn btn-success my-3"
          >
            Ingresar con Google
          </button>

          <Link to="/register">Crear una cuenta</Link>

          {user?.mensaje && <p className="loginError">{user.mensaje}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;