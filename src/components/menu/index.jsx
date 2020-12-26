import * as React from "react";
import { Link} from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
const Menu = () => (


<Navbar bg="primary" variant="dark">
    <Navbar.Brand as={Link} to="/dashboard">Stock App</Navbar.Brand>
    <Nav className="mr-auto">
        <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link>
        <Nav.Link as={Link} to="/chart">chart</Nav.Link>
    </Nav>

</Navbar>
);
export default Menu;

