import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = props => {
  return (
    <div className="container navbar">
      <div className="row">
        <div className="col-sm-3">
          <a>About</a>
        </div>
        <div className="col-sm-3">
          <a>Contact</a>
        </div>
        <div className="col-sm-3">
          <a>Experience</a>
        </div>
        <div className="col-sm-3">
          <a>News</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
