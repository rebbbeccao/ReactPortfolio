import React from 'react';

// react test list component
const List = props => (
  <ul className="list-group">
    {props.experience.map(item => (
      <li className="list-group-item" key={item.id}>
        {item.name}
      </li>
    ))}
  </ul>
);

export default List;
