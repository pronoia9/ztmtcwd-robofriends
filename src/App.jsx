import React from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';

const App = ({ robots }) => {
  return (
    <div className='app-container'>
      <SearchBox />
      {robots.length > 0 ? <CardList robots={robots} /> : <></>}
    </div>
  );
};

export default App;
