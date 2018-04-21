import React, { Component } from 'react';
import './Card.css';

export default class CardFront extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card-side side-back">
        <div className="container-fluid">
          {/* <form formAction="" className="card-form"> */}
          <div className="row">
            <div className="col-xs-6">
              <strong>Name:</strong>
              <p>{this.props.name}</p>
            </div>

            <div className="col-xs-6" />
          </div>

          <div className="row">
            <div className="col-xs-6" />

            <div className="col-xs-6" />
          </div>
        </div>
      </div>
    );
  }
}
