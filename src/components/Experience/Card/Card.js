import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import ExperienceItem from '../../../containers/ExperienceItems';
import './Card.css';
// import Title from './Title';
import experience from './experience.json';
// import Card from '../../containers/Cards';

// const cardContainer = document.querySelector('.react-card');

// // React component for form inputs
// class CardInput extends Component {
//   render() {
//     return (
//       <fieldset>
//         <input
//           name={this.props.name}
//           id={this.props.id}
//           type={this.props.type || 'text'}
//           placeholder={this.props.placeholder}
//           required
//         />
//       </fieldset>
//     );
//   }
// }
// React component for textarea
// class CardTextarea extends Component {
//   render() {
//     return (
//       <fieldset>
//         <textarea
//           name={this.props.name}
//           id={this.props.id}
//           placeholder={this.props.placeholder}
//           required
//         />
//       </fieldset>
//     );
//   }
// }
// React component for form button
// class CardBtn extends Component {
//   render() {
//     return (
//       <fieldset>
//         <button
//           className={this.props.className}
//           type={this.props.type}
//           value={this.props.value}
//         >
//           {this.props.value}
//         </button>
//       </fieldset>
//     );
//   }
// }
// React component for social profile links
// class CardProfileLinks extends React.Component {
//   render() {
//     const profileLinks = ['twitter', 'linkedin', 'dribbble', 'facebook'];

//     const linksList = profileLinks.map((link, index) => (
//       <li key={index}>
//         <a href="#">
//           <i className={'fa fa-' + link} />
//         </a>
//       </li>
//     ));

//     return (
//       <div className="card-social-links">
//         <ul className="social-links">{linksList}</ul>
//       </div>
//     );
//   }
// }

// // react test list component
// const Title = props => (
//   <div className="content">
//     <ul>
//       {/* <li> */}
//       <strong>Name:</strong>
//       <p>{props.name}</p>
//       {/* </li> */}
//     </ul>
//   </div>
// );

// React component for the backside of the card
const CardBack = props => {
  return (
    <div className="card-side side-back">
      <div className="container-fluid">
        {/* <form formAction="" className="card-form"> */}
        <div className="row">
          <div className="col-xs-6">
            <strong>Name:</strong>
            <p>{props.name}</p>
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
};

// React component for the frontside of the card
const CardFront = props => {
  return (
    <div className="card-side side-front side-front-content">
      <div className="container-fluid">
        <div className="row">
          <img src="https://source.unsplash.com/w8YICpz1I10/358x458" />
        </div>
        <div className="row">
          <h2>{props.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default class Card extends Component {
  // class Card extends Component {
  //   state = {
  //     current: null
  //   };

  //   componentWillMount() {
  //       const experience = this.state.current.map(card => card.id);
  //       this.setState({ current: experience });
  //     };
  // }

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
