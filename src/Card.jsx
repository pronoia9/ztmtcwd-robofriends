import React from 'react';

const Card = ({ id, name, username, email }) => {
  return (
    <div className='card tc bg-light-green dib bd3 pa3 ma2 grow bw2 shadow-5'>
      <img src={`https://robohash.org/${id}?200x200`} alt={`${username}_photo`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
