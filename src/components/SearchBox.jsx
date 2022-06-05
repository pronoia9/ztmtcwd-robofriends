import React from 'react';

export default function SearchBox({ onInputChange }) {
  return (
    <div className='searchbox-container pa2 tc'>
      <input className='search-box' type='search' placeholder='search robots' onChange={onInputChange} />
    </div>
  );
};