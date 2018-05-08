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
    // const parallaxImageFlowers = '../../assets/blossom-bouquet.jpg';

    return (
      <div className="App">
        <Header />

        <Branding />
        {/* <Parallax speed={0.4} zindex="0" top="0%" image={parallaxImageFlowers}> */}
        <About />
        {/* </Parallax> */}
        <Experience />

        <Contact />

        <Tech />

        <Footer />
      </div>
    );
  }
}
