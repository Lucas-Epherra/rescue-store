import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartLogo from '../componentes/cartWidget';
import './myNav.css';



function BarraNav() {
    return (
        <Navbar bg="danger" variant="danger">
            <Container>
                <Navbar.Brand href="#home">
                    <div className='d-flex'><img
                        src="./logo.png"
                        width="50"
                        height="50"
                        className="d-inline-block align-top rounded-5"
                        alt="Logo"
                    />
                        <p className='m-2 tituloNav'>Rescue Store</p>
                    </div>
                </Navbar.Brand>
                <Nav >
                    <Nav.Link className='links' href="#home">Inicio</Nav.Link>
                    <Nav.Link className='links' href="#features">Productos</Nav.Link>
                    <CartLogo />
                </Nav>
            </Container>
        </Navbar>
    );
}

export default BarraNav;