import React from 'react';
import CardList from './CardList';

const App = ({ robots }) => {
  return <div className='app-container'>{robots ? <CardList robots={robots} /> : <></>}</div>;
};

export default App;
