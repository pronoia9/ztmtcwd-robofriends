import React from 'react';
import Cards from './Cards';

const App = ({ robots }) => {
  return <div className='app-container'>{robots ? <Cards robots={robots} /> : <></>}</div>;
};

export default App;
