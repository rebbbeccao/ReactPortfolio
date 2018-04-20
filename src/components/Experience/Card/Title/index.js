import React from 'react';

// react test list component
const Title = props => (
  <div className="content">
    <ul>
      {/* <li> */}
      <strong>Name:</strong>
      <p>{props.name}</p>
      {/* </li> */}
    </ul>
  </div>
);

export default Title;
