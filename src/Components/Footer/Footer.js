import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand className='Navbar'>Mel & Tyler</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Footer;
