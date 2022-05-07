import React from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
// data
import robots from './robots.json';

const state = {
  robots: robots,
  searchKey: ''
}
const App = ({ robots }) => {
  return (
    <div className='app-container'>
      <SearchBox />
      {state.robots.length > 0 ? <CardList robots={state.robots} /> : <></>}
    </div>
  );
};

export default App;
