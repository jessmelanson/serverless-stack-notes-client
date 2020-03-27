import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import {
  Nav,
  Navbar,
  NavItem
} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import { useAuthContext } from '../context/AuthContext';

const NavLinks = () => {
  const { isAuthenticated, logOut } = useAuthContext();
  const history = useHistory();

  const handleLogOut = async () => {
    try {
      await logOut();
      history.push('/login');
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <Navbar fluid collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Scratch</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav pullRight>
          {isAuthenticated &&  <NavItem onClick={handleLogOut}>Logout</NavItem>}
          {!isAuthenticated && (
            <>
              <LinkContainer to="/signup">
                <NavItem>Signup</NavItem>
              </LinkContainer>
              <LinkContainer to="/login">
                <NavItem>Login</NavItem>
              </LinkContainer>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavLinks;
