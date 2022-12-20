import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartLogo from '../componentes/cartWidget';
import logo from '../assets/logo.png';
import './myNav.css';



function BarraNav() {
    return (
        <Navbar bg="danger" variant="danger" className='navbar'>
            <Container className='container'>
                <Navbar.Brand href="#home">
                    <div className='d-flex'><img
                        src={logo}
                        width="50"
                        height="50"
                        className="align-top rounded-5"
                        alt="Logo"
                    />
                        <p className='m-2 tituloNav'>Rescue Store</p>
                    </div>
                </Navbar.Brand>
                <Nav>
                    <Nav.Link className='links' href="#inicio">Inicio</Nav.Link>
                    <Nav.Link className='links' href="#productos">Productos</Nav.Link>
                    <CartLogo />
                </Nav>
            </Container>
            
        </Navbar>
    );
}

export default BarraNav;