import { Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Root = () => {
    return <>
        <Navbar bg="light">
            <Container>
                <Navbar.Brand>Hogwarts Potions</Navbar.Brand>
            </Container>
        </Navbar>
        <Container id="content">
            <Outlet />
        </Container>
    </>
}

export default Root;