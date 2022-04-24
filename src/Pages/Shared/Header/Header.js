import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
    const [user]=useAuthState(auth);
    const handleSignOut=()=>{
        signOut(auth);
    }
    return (
        <>
            <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <img src={logo} height="50" alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto menu-bar">
                            <Link to="/">Home</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/experts">Experts</Link>
                        </Nav>
                        {
                            
                            user && <Nav className='me-auto menu-bar'>
                            <Link to="/addservice">Add Service</Link>
                            <Link to="/manage">Manage</Link>
                            </Nav>
                        }
                        {
                            user?
                            <button className='btn btn-outline-light rounded-pill border-3' onClick={handleSignOut}>Logout</button>
                            :
                            <Nav className="menu-bar">
                            <Link to="/login">Login</Link>
                        </Nav>
                        }
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;

