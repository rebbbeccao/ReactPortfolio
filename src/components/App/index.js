import React, { Component } from 'react';
import Header from '../Header';
import Branding from '../Branding';
import About from '../About';
import Experience from '../Experience';
import Contact from '../Contact';
import Tech from '../Technologies';
import Footer from '../Footer';
import ScrollUpButton from 'react-scroll-up-button';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      ScrollUpButton: {
        color: '#ffffff'
      }
    };
    return (
      <div className="App">
        <ScrollUpButton
          ContainerClassName="ScrollUpButton__Container"
          TransitionClassName="ScrollUpButton__Toggled"
          AnimationDuration={450}
          style={style.ScrollUpButton}
        />

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
