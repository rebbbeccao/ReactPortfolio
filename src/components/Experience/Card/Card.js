import React, { Component } from 'react';
import './Card.css';
import experience from './experience.json';

export default class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(experience);
    return (
      <div className="card-container">
        <div className="card-body">
          {experience.map((details, key) => (
            <div id={details.name} key={key}>
              <CardBack
                id={details.id}
                name={key}
                description={details.description}
              />

              <CardFront
                id={details.id}
                name={details.name}
                description={details.description}
              />
            </div>
          ))}
        </div>
      </div>
    );
    // }
  }
}
