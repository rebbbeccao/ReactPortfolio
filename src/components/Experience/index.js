import React, { Component } from 'react';
import Card from './Card';
import experience from './Card/experience.json';

// const Experience = props => {
class Experience extends Component {
  render() {
    return (
      <div>
        <p>Experience Component </p>
        {experience.map((item, index) => (
          <div className="col-sm-3" key={index}>
            <Card />
          </div>
        ))}
        {/* <Card /> */}
      </div>
    );
  }
}

export default Experience;
