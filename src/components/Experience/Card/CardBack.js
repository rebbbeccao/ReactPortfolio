import React, { Component } from 'react';
import './Card.css';

export default class CardBack extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card-side side-back">
        <div className="container-fluid">
          <div className="row back-row">
            <h2 className="back-title"> {this.props.name}</h2>
            <p className="description">{this.props.description}</p>
            <a href={this.props.projectLink}>
              <img
                className="project-link"
                src="/assets/arrow-icon.jpg"
                alt="Go to project"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
