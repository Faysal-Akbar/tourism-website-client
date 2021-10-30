import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../src/images/logo/logo.png';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
        <Container>
            <img
                src={logo}
                width="60"
                height="45"
                className="d-inline-block align-top"
                alt=""
            />
            <Navbar.Brand className="fw-bold" href="#home">Hero <span className="text-danger">Traveller</span></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
            <Nav className="ms-auto me-5">
            <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
            {
                user.displayName ? <Nav.Link as={HashLink} to="/myOrder">My Orders</Nav.Link> : ''
            }
            {
                user.displayName ? <Nav.Link as={HashLink} to="/manageOrder">Manage Orders</Nav.Link> : ''
            }
            {
                user.displayName ? <Nav.Link as={HashLink} to="/addOffer">Add New Offer</Nav.Link> : ''
            }
            </Nav>
            {
                user.displayName ? <button onClick={logOut} className="btn btn-outline-danger me-3">Logout</button> :
                <Link to="/login">
                    <button className="btn btn-outline-success me-3">Login</button>
                </Link>
            }
            <Navbar.Text>
                Signed in as: <a href="#login">{user.displayName}</a>
            </Navbar.Text>
            <img style={{marginLeft: "10px", borderRadius: "50%"}} width="30px" src={user.photoURL} alt="" />
            </Navbar.Collapse>
        </Container>
        </Navbar>
        </>
    );
};

export default Header;