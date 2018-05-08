import React, { Component } from 'react';
import CardBack from './Card/CardBack';
import CardFront from './Card/CardFront';
import './Experience.css';
import './Card/Card.css';
import experience from './Card/experience.json';

// Component containing flip card sides
//passes props to CardBack & CardFront
class Experience extends Component {
  render() {
    return (
      <div className="experience-container">
        <h1>Experience</h1>
        {experience.map((details, key) => (
          <div className="col-sm-4" key={key}>
            <div className="card-container">
              <div className="card-body">
                <CardBack
                  id={details.id}
                  name={details.name}
                  description={details.description}
                />

                <CardFront
                  id={details.id}
                  name={details.name}
                  description={details.description}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Experience;
