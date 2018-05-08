import React, { Component } from 'react';
import './Card.css';

export default class CardFront extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card-side side-front side-front-content">
        <div className="container-fluid">
          <div className="row project-name">
            <h2>{this.props.name}</h2>
          </div>
          <div className="row">
            <img src="https://source.unsplash.com/w8YICpz1I10/358x458" />
          </div>
        </div>
      </div>
    );
  }
}
