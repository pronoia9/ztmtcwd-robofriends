import React from 'react';
import './css/Card.css';

const Card = ({ id, name = 'Name', username = 'Username', email = 'example@mail.com' }) => {
  return (
    <div className='card-container tc dib bd3 pa3 ma2 grow bw2'>
      <div className='card'>
        <img src={`https://robohash.org/${id}?200x200`} alt={`${username}_photo`} />
        <div>
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
