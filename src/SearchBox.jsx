import React from 'react';
import './css/SearchBox.css';

const SearchBox = ({ onSearch }) => {
  return (
    <div className='searchbox-container pa2 tc'>
      <input className='search-box' type='search' placeholder='search robots' onChange={onSearch} />
    </div>
  );
};

export default SearchBox;
