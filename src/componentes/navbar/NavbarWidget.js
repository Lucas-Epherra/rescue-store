import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
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
    <Navbar expand="lg" className="navbarWidget sticky-top">
      <Container className="navbarContainer">
        <NavLink to="/" className="brandLink">
          <div className="brandBox">
            <img src={logo} className="brandLogo" alt="Logo Rescue Store" />
            <div className="brandTextBox">
              <p className="tituloNav">Rescue Store</p>
              <span className="brandSubtitle">Equipamiento de rescate</span>
            </div>
          </div>
        </NavLink>

        <Navbar.Toggle aria-controls="main-navbar" className="navbarToggle" />

        <Navbar.Collapse id="main-navbar">
          <Nav className="navContent ms-auto">
            <div className="navLinksGroup">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "navLinkCustom activeNav" : "navLinkCustom"
                }
              >
                Inicio
              </NavLink>

              <NavLink
                to="/productos"
                className={({ isActive }) =>
                  isActive ? "navLinkCustom activeNav" : "navLinkCustom"
                }
              >
                Productos
              </NavLink>
            </div>

            <div className="navActions">
              <div className="cartWrapper">
                <CartWidget />
              </div>

              {user?.email ? (
                <div className="sessionBox">
                  <NavLink
                    to="/perfil"
                    className={({ isActive }) =>
                      isActive ? "navLinkCustom activeNav" : "navLinkCustom"
                    }
                  >
                    Mi cuenta
                  </NavLink>

                  <button className="logoutBtnCustom" onClick={handleLogout}>
                    Cerrar sesión
                  </button>
                </div>
              ) : (
                <NavLink to="/login" className="loginBtnCustom">
                  Iniciar sesión
                </NavLink>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarWidget;