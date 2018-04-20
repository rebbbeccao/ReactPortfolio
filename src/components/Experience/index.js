import React, { Component } from 'react';
import Card from './Card';
import experience from './Card/experience.json';

const Experience = props => {
  return (
    <div>
      <p>Experience Component </p>
      {experience.map(item => (
        <Card id={item.id} name={item.name} description={item.description} />
      ))}
    </div>
  );
};

export default Experience;
