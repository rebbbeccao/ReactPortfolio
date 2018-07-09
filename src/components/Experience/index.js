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
      <div
        className="experience-container"
        className="container"
        id="experience-id"
      >
        <h1 className="experience">Experience</h1>

        {experience.map((details, key) => (
          <div className="col-sm-4">
            <div className="card-container">
              <div className="card-body" key={key}>
                <CardBack
                  id={details.id}
                  name={details.name}
                  description={details.description}
                  projectImage={details.projectImage}
                  projectLink={details.projectLink}
                />

                <CardFront
                  id={details.id}
                  name={details.name}
                  description={details.description}
                  projectImage={details.projectImage}
                  projectLink={details.projectLink}
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
