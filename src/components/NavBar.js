import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';

const NavBar = (props) => {

    const gotoRoute = (e, endpoint) => {
        e.preventDefault();
        props.history.push(endpoint);    
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Nav className="mr-auto">
                <Nav.Link href="/todos" onClick={(e) => gotoRoute(e, '/todos')}>Todos</Nav.Link>
                <Nav.Link href="/contact" onClick={(e) => gotoRoute(e, '/contact')}>Contact</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default withRouter(NavBar);