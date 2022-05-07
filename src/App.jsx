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
      <SearchBox searchKey={state.searchKey} />
      {state.robots.length > 0 ? <CardList robots={state.robots} searchKey={state.searchKey} /> : <></>}
    </div>
  );
};

export default App;
