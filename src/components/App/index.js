import React, { Component } from 'react';
// import logo from './logo.svg';
import Header from '../Header';
import Branding from '../Branding';
import About from '../About';
import Experience from '../Experience';
import Contact from '../Contact';
import Tech from '../Technologies';
import Footer from '../Footer';
import './App.css';

class App extends Component {
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

export default App;
