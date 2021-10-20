import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../AuthProvider/UseAuth';

const Header = () => {
  const{user,logOut}=useAuth();

return (
        <>
            <Navbar className='px-2' bg="light" expand="lg">
        <Navbar.Brand href="#">
            <img src="image/logo.png" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mx-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link }to='/home'>Home</Nav.Link>
            <Nav.Link as={Link} to="/service">Services</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/doctor">Doctor</Nav.Link>
           
          </Nav>
          <Form className="d-flex">
           {user.displayName && <h5 className='me-2'>{user.displayName}</h5>}
            <Link to='/login'>
           {user.displayName ? <button onClick={logOut} className='btn btn-danger'>LogOut</button> : <Button  className='btn btn-primary' variant="outline-success">Login</Button>}

            </Link>                    
          </Form>
        </Navbar.Collapse>
      </Navbar>
        </>
    );
};

export default Header;