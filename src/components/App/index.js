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
// import styled from 'styled-components';
// import { device } from '../../containers/responsive_utilities.js';

// const AppWrapper = styled.div`
//   @media ${device.laptop} {
//     width: 1024px;
//   }
// `;

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
      // <AppWrapper>
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
      // </AppWrapper>
    );
  }
}
export default App;
