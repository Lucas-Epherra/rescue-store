import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import { Link } from "react-router-dom";
import "./RegisterScreen.css";

const RegisterScreen = () => {

  const {user,loading,register} = useContext(LoginContext)

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

  const handleSumbit = (e) => {
    e.preventDefault();
    register(values)
  };

  return (
    <div className="login-screen">
      <div className="container formCont">
        <h2 className="logText">Registrarse</h2>

        <form className="formBox" onSubmit={handleSumbit}>
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
          <button disabled={loading} className="btn btn-primary my-3">Aceptar</button>
          {user.mensaje && <p className="loginError" >{user.mensaje}</p>}
        </form>
        <Link to="/login">Ya tengo una cuenta</Link>
      </div>
    </div>
  );
};

export default RegisterScreen;
