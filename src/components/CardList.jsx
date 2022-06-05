import React from 'react';
import Card from './Card';

export default function Cards({ robots, searchKey }) {
  return (
    <div className='cards-container tc'>
      {robots.map(robot => <Card {...robot} key={robot.id} />)}
    </div>
  );
};