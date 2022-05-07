import React from 'react';

const SearchBox = () => {
  return (
    <div className='searchbox-container pa2 tc'>
      <input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='search robots' onChange={e => console.log(e.target.value)} />
    </div>
  );
};

export default SearchBox;
