import React from 'react';
// import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './Header.css';

const Header = props => {
  return (
    // <div className="header-container">
    <Navbar collapseOnSelect>
      <Nav className="nav">
        <NavItem className="navbar-item" eventKey={1} href="#about-id">
          About
        </NavItem>
        <NavItem className="navbar-item" eventKey={2} href="#contact-id">
          Contact
        </NavItem>
        <NavItem className="navbar-item" eventKey={3} href="#experience-id">
          Experience
        </NavItem>
        <NavItem className="navbar-item" eventKey={4} href="#">
          Latest
        </NavItem>
      </Nav>
    </Navbar>
    // </div>
  );
};

export default Header;
