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

            {/* <CardInput
                  name="contactFirstName"
                  id="contactFirstName"
                  type="text"
                  placeholder="Your first name"
                /> */}
          </div>

          <div className="col-xs-6">
            {/* <CardInput
                  name="contactLastName"
                  id="contactLastName"
                  type="text"
                  placeholder="Your last name"
                /> */}
          </div>
        </div>

        <div className="row">
          <div className="col-xs-6">
            {/* <CardInput
                  name="contactEmail"
                  id="contactEmail"
                  type="email"
                  placeholder="Your email address"
                /> */}
          </div>

          <div className="col-xs-6">
            {/* <CardInput
                  name="contactSubject"
                  id="contactSubject"
                  type="text"
                  placeholder="Subject"
                /> */}
          </div>
        </div>

        {/* <CardTextarea
              name="contactMessage"
              id="contactMessage"
              placeholder="Your message"
            /> */}

        {/* <CardBtn
              className="btn btn-primary"
              type="submit"
              value="Send message"
            /> */}
        {/* </form> */}
        {/* <Title experience={experience} /> */}
        {/* <CardProfileLinks /> */}
      </div>
    </div>
  );
};

// React component for the frontside of the card
const CardFront = props => {
  return (
    <div className="card-side side-front">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-6">
            <img src="https://source.unsplash.com/w8YICpz1I10/358x458" />
          </div>

          <div className="col-xs-6 side-front-content">
            <h2>{props.name}</h2>
            <h1>UI/UX Designer</h1>

            {/* <Title experience={experience} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

const Card = props => {
  return (
    <div className="card-container">
      <div className="card-body">
        {experience.map(details => (
          <CardBack
            id={details.id}
            name={details.name}
            description={details.description}
          />
        ))}

        {experience.map(details => (
          <CardFront
            id={details.id}
            name={details.name}
            description={details.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Card;
