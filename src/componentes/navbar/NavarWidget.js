import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import "./navbar.css";
import { useLoginContext } from "../../context/LoginContext";

function NavbarWidget() {
  const { user, logout } = useLoginContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Navbar className="navbar sticky-top">
      <Container className="container">
        <Link to="/">
          <div className="d-flex">
            <img
              src={logo}
              width="50"
              height="50"
              className="align-top rounded-5"
              alt="Logo"
            />
            <p className="m-2 tituloNav">Rescue Store</p>
          </div>
        </Link>

        <Nav className="btnBox d-flex flex-wrap align-items-center">
          <Link className="links mx-2 btn btn-warning" to="/">
            Inicio
          </Link>

          <Link className="links mx-2 btn btn-warning" to="/productos">
            Productos
          </Link>

          <CartWidget />

          <div className="logoutDiv d-flex align-items-center">
            {user?.email ? (
              <>
                <Link className="links mx-2 btn btn-warning" to="/perfil">
                  Mi cuenta
                </Link>{" "}
                <button
                  className="btn btn-danger logoutBtn"
                  onClick={handleLogout}
                >
                  Cerrar sesión
                </button>
              </>
            ) : (
              <Link className="links mx-2 btn btn-warning" to="/login">
                Iniciar sesión
              </Link>
            )}
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavbarWidget;
