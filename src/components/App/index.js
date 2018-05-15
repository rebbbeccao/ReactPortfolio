import React, { Component } from 'react';
// import logo from './logo.svg';
// import Parallax from '../Parallax';
import Header from '../Header';
import Branding from '../Branding';
import About from '../About';
import Experience from '../Experience';
// import Card from '../Experience';
import Contact from '../Contact';
import Tech from '../Technologies';
import Footer from '../Footer';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />

        <Branding />

        <About />

        <Experience />

        <Contact />

        <Tech />

        <Footer />
      </div>
    );
  }
}
