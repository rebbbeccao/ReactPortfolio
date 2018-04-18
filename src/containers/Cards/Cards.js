import React, { Component } from 'react';
import CardFlippable from 'react-card-flippable';

class Card extends Component {
  render() {
    // const frontContent = (
    //   <div>
    //     <h3>Front content goes here</h3>
    //   </div>
    // );
    // const backContent = (
    //   <div>
    //     <h3>Back content goes here</h3>
    //   </div>
    // );

    return (
      <div class="react-card">
        {/* <CardFlippable
          style={{ width: 100 }}
          frontContent={frontContent}
          backContent={backContent}
        /> */}
      </div>
    );
  }
}
export default Card;
