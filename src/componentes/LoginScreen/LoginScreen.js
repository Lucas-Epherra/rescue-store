import { useContext, useState } from "react";
import { LoginContext } from "../../context/LoginContext";
import "./LoginScreen.css";

const LoginScreen = () => {

  const {login,user,loading} = useContext(LoginContext)

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
    login(values)
  };

  return (
    <div className="login-screen">
      <div className="container formCont">
        <h2 className="logText">Bienvenido a Rescue Store</h2>

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
          <button disabled={loading} className="btn btn-primary my-3">Ingresar</button>
          {user.mensaje && <p className="loginError" >{user.mensaje}</p>}
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
