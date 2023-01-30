import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import Login from '../Auth/Login';
import Logout from '../Auth/Logout';
import Profile from '../Auth/Profile';
import { withAuth0 } from "@auth0/auth0-react";


class Header extends React.Component {
  render() {
    return (
      <Navbar className='Header' collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem><Link to="/about" className="nav-link"> About</Link></NavItem>
        {
          this.props.auth0.isAuthenticated ?
            <>
              <NavItem><Profile /></NavItem>
              <NavItem><Logout /></NavItem>
            </>
            :
            <NavItem><Login /></NavItem>
        }

      </Navbar>
    );
  }
}

export default withAuth0(Header);
