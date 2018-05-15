import React, { Component } from 'react';
import './Technologies.css';
import technologies from './technologies.json';

class Tech extends Component {
  render() {
    console.log(technologies);
    return (
      <div className="container technologies-container">
        <div className="row">
          {technologies.map((details, key) => (
            <div className="col-sm-3" key={details.key}>
              <div className={details.techTitle} key={details.key}>
                <img
                  key={details.key}
                  src={details.techImage}
                  alt={details.techTitle}
                  className="tech-image"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Tech;
