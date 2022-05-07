import React from 'react';
import Card from './Card';

const Cards = ({ robots, searchKey }) => {
  return (
    <div className='cards-container'>
      {robots.map((robot) => (
        robot.name.includes(searchKey) ? <Card {...robot} key={robot.id} /> : <></>
      ))}
    </div>
  );
};

export default Cards;
