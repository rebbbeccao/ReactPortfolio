import React, { Component } from 'react';
import './About.css';
import Media from 'react-media';

class About extends Component {
  render() {
    return (
      <div className="about-container" id="about-id">
        <div className="text-cushion">
          <div className="text">
            <p className="aboutP">
              I love to code clean Javascript, and populate beautifully
              UX-designed interfaces. I am currently expanding my skills in
              ReactJS. I utilize up up to date technologies like and related to,
              ES6, CSS, CSS-grid, Handlebars, JQuery, Media Queries, RESTful
              APIs, JSON, SQL, Sequelize, Mongo, Mongoose, node.js.
            </p>
            <p className="aboutP">
              With a heavy background in hairspray, dance, and year-round
              training for cheer competitions; I fiercely enter the tech
              industry. (Dun dun dun...)
            </p>
            <p className="aboutP">
              The competitive drive I acquired as a performer launched me into
              many successes, and conditioned me for tedious, critical thinking
              that enhances my ability to write and problem-solve my codes.
            </p>
            <p className="aboutP">
              I am currently the Director of Marketing for a Tax Resolution Firm
              in Irvine - specializing in Digital Marketing. I am currently
              looking for a role that encourages total immersion of life as a
              Javascript or MERN stack Web Developer.
            </p>

            <p className="aboutP">
              It's the 21st century a brain is an accessory, right?
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
