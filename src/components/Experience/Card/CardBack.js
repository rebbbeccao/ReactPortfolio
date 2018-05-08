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
          <div className="row">
            <h2> {this.props.name}</h2>
            <p>{this.props.description}</p>
          </div>
        </div>
      </div>
    );
  }
}
