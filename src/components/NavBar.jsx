import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

import { CartWidget } from "./CartWidget";

export const NavBar = () => (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Nuestra tienda</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                    <Nav.Link as={NavLink} to="/category/remeras">Remeras</Nav.Link>
                    <Nav.Link as={NavLink} to="/category/zapatillas">Zapatillas</Nav.Link>
                    <Nav.Link as={NavLink} to="/category/buzos">Buzos</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    </>
);
