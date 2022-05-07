import React from 'react';
import CardList from './CardList';

const App = ({ robots }) => {
  return <div className='app-container'>{robots.length > 0 ? <CardList robots={robots} /> : <></>}</div>;
};

export default App;
