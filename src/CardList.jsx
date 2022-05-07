import React from 'react';
import Card from './Card';

const Cards = ({ robots, searchKey }) => {
  return (
    <div className='cards-container'>
      {robots.filter(robot => robot.name.toLowerCase(searchKey.toLowerCase()))
             .map(robot => <Card {...robot} key={robot.id} />)}
    </div>
  );
};

export default Cards;
