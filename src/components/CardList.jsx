import React from 'react';
import Card from './Card';
import './CardList.css';

const Cards = ({ robots, searchKey }) => {
  return (
    <div className='cards-container tc'>
      {robots.map(robot => <Card {...robot} key={robot.id} />)}
    </div>
  );
};

export default Cards;
