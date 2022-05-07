import React from 'react';

const SearchBox = ({ searchKey }) => {
  return (
    <div className='searchbox-container pa2 tc'>
      <input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='search robots' onChange={e => searchKey = e.target.value} />
    </div>
  );
};

export default SearchBox;
