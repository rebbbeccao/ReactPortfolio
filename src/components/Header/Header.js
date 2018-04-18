import React from 'react';
// import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import './Header.css';

const Header = props => {
  return (
    // <div className="container navbar">
    //   <div className="row">
    //     <div className="col-sm-3">
    //       <a>About</a>
    //     </div>
    //     <div className="col-sm-3">
    //       <a>Contact</a>
    //     </div>
    //     <div className="col-sm-3">
    //       <a>Experience</a>
    //     </div>
    //     <div className="col-sm-3">
    //       <a>News</a>
    //     </div>
    //   </div>
    // </div>
    <div className="header-container">
      <Navbar className="navbar">
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="nav">
            <NavItem className="navbar-item" eventKey={1} href="#">
              About
            </NavItem>
            <NavItem className="navbar-item" eventKey={2} href="#">
              Contact
            </NavItem>
            <NavItem className="navbar-item" eventKey={3} href="#">
              Projects
            </NavItem>
            <NavItem className="navbar-item" eventKey={4} href="#">
              Experience
            </NavItem>
            <NavItem className="navbar-item" eventKey={5} href="#">
              Latest
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
