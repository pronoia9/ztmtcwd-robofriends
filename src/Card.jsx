import React from 'react';

const Card = () => {
  return (
    <div className='bg-light-green dib bd3 pa3 ma2 grow bw2 shadow-5'>
      <img src='https://robohash.org/test?200x200' alt='photo' />
      <div>
        <h2>Name</h2>
        <p>email@gmail.com</p>
      </div>
    </div>
  );
};

export default Card;
