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
            <h2 className="back-title"> {this.props.name}</h2>
            <p className="description">{this.props.description}</p>
            <a href={this.props.projectLink}>
              <img
                className="project-link"
                src="https://lh3.googleusercontent.com/KKyA86-zFer_jkIjvFNRAtfwRRpjWcReWl-_dJ0I2D-Pw37BvdyWIGc-sQYkmtb-gVBRSvU6AFJXTMTiYhhwGPGEwTPKwV79dEeOG6cxarc9ewpTeOpx5XxG4yBX3E2Qnj1oMcaasXOzGn0gyUteHnbw4pZNrFkOoMLddxmFCWgaDicbtMeOcq-g93YNjnYZH-GNKPL7Jij8BrDamZpycDN74KQmUS6dwqtZw6OYmjCapJHn-AzJ6ymyKE72Qq9HVn01Tc5Y5beUir5fCxP4Ga0PYxWGzRCrsCcpI690XWE_plVWxC6FG3Ye89GicmzSwrpV4x_nwQZ7OgGzXjHqp76sID3f_TBEqk8UiIz_is-8SupFyGEKsqp4EJi2F_q9BEG2kFKht2NYlgHG7jKcxTJxuwfaTtcgoiGHSNHNCWmNPVFWcPRKg1IkoljvKQYCWpgg-AexJoiLTtmm3r4iIWn2AIXWEKtHENJJt-OoEXMYbcb3QPNf9k84Nh040KXIoA7LcUmmenuTHR-HVx8K25coer5FpjMPNu0oNjZy0r9oMDCi4Lus3piNfYAPsLSWFi-Tp3UdKsqycwcxNqz1fODlSNBiOeU7C-xdWg=s80-no"
                alt="Go to project"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
