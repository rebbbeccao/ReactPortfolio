import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false
    };
  }
  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  render() {
    return (
      <div className="contact-container" id="contact-id">
        <div className="container contact-content">
          <div className="row">
            <h1 className="contact-title">Let's Connect!</h1>
          </div>
          <div className="row contact-row">
            <div className="col-sm-6 column">
              <div className="me-pic">
                <img src="/assets/profile.jpg" alt="Me" className="profile" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="row contact-row-2">
                <div className="col-sm-3">
                  <a
                    href="#"
                    onMouseEnter={this.handleMouseHover}
                    onMouseLeave={this.handleMouseHover}
                  >
                    <img
                      className="contact-icon"
                      src="/assets/location.jpg"
                      alt="location"
                    />
                  </a>

                  {this.state.isHovering && (
                    <div className="hovering-div">
                      <p className="location">Newport Beach, CA</p>
                      <p className="location-2">
                        Interested in remote and relocation opportunities!
                      </p>
                    </div>
                  )}
                </div>
                <div className="col-sm-3">
                  <a href="mailto:rebbbeccao@gmail.com">
                    <img
                      className="contact-icon"
                      src="/assets/mail.jpg"
                      alt="email"
                    />
                  </a>
                </div>
                <div className="col-sm-3">
                  <a href="https://github.com/rebbbeccao">
                    <img
                      className="contact-icon"
                      src="/assets/contactgit.jpg"
                      alt="github"
                    />
                  </a>
                </div>
                <div className="col-sm-3">
                  <a href="https://www.linkedin.com/in/rebeccaao/">
                    <img
                      className="contact-icon"
                      src="/assets/linkedin.jpg"
                      alt="linkedIn"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
