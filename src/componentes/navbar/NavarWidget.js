import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartWidget from "../CartWidget/CartWidget";
import logo from "../../assets/logo.png";
import { Link } from 'react-router-dom';
import "./navbar.css";
import { useLoginContext } from "../../context/LoginContext";

function NavbarWidget() {

    const {user,logout} = useLoginContext()

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
                <Nav>
                    <Link className="links mx-2 my-2 btn btn-warning" to="/">Inicio
                    </Link>
                    <Link className="links mx-2 my-2 btn btn-warning" to="/productos">
                        Productos
                    </Link>
                    <CartWidget />
                    <div className="logoutDiv" >
                        <p>Bienvenido: {user.email} </p>
                        <button className="btn btn-warning" onClick={logout}>Logout</button>
                    </div>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavbarWidget;
