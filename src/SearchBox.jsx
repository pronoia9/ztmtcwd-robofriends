import React from 'react';

const onSearch = (e) => {
  const key = this.state.searchKey;
};

const SearchBox = ({ searchKey }) => {
  return (
    <div className='searchbox-container pa2 tc'>
      <input className='pa3 ba b--green bg-lightest-blue' type='search' placeholder='search robots' onChange={onSearch} />
    </div>
  );
};

export default SearchBox;
