import React from 'react';
import Card from './Card';

const Cards = ({ robots }) => {
  return <div className='cards-container'>{robots ? robots.map((robot) => <Card {...robot} key={robot.id} />) : <></>}</div>;
};

export default Cards;
