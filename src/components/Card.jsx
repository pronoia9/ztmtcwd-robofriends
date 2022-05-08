import React from 'react';
import './Card.css';

const Card = ({ id, name = 'Name', username = 'Username', email = 'example@mail.com' }) => {
  return (
    <div className='gradient-spacey tc dib bd3 pa3 ma2 grow bw2'>
      <div className='card-container'>
        <div className='card'>
          <img src={`https://robohash.org/${id}?200x200`} alt={`${username}_photo`} />
          <div className='info-container'>
            <p className='name'>{name}</p>
            <p className='username'>{`@${username}`}</p>
            <p className='email'>{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
