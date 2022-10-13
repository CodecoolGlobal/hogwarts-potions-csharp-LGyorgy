import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Root = () => {
    return (
        <>
            <Navbar className="shadow-sm" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>Hogwarts Potions</Navbar.Brand>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/">Brew potion</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Container id="content">
                <Outlet />
            </Container>
        </>
    );
}

export default Root;