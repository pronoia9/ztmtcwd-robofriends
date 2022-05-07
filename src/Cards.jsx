import React from 'react';
import Card from './Card';

const Cards = ({ robots }) => {
  return robots.map((robot) => <Card {...robot} />);
};

export default Cards;
