import React from 'react';
import List from './List';

const experienceList = [
  {
    id: 1,
    title: 'Milk',
    description: true,
    link: '',
    image: ''
  },
  {
    id: 2,
    title: 'Eggs',
    description: true,
    link: '',
    image: ''
  },
  {
    id: 3,
    title: 'Cheese',
    description: false,
    link: '',
    image: ''
  },
  {
    id: 4,
    title: 'Cake Mix',
    description: false,
    link: '',
    image: ''
  },
  {
    id: 5,
    title: 'Carrots',
    description: false,
    link: '',
    image: ''
  },
  {
    id: 6,
    title: 'Juice',
    description: true,
    link: '',
    image: ''
  }
];

const ExperienceItem = () => <List experienceList={experienceList} />;

export default ExperienceItem;
