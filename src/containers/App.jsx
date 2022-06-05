import React, { useState, useEffect } from 'react';
// components
import ErrorBoundry from '../components/ErrorBoundry';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
// styles
import './App.css';

export default function App() {
  const [state, setState] = useState({ robots: [], searchKey: '' });
  const { robots, searchKey } = state;

  // get robotos list and set state
  useEffect(
    () => async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      setState((state) => ({ ...state, robots: data }));
    },
    []
  );
  const onInputChange = (e) => setState((state) => ({ ...state, searchKey: e.target.value }));
  const changeHtmlHeight = (height) => (document.getElementsByTagName('html')[0].style.height = height);
  const filteredRobots = robots.filter((robot) => robot.name.toLowerCase().includes(searchKey.toLowerCase()));

  !filteredRobots.length ? changeHtmlHeight('100%') : changeHtmlHeight('');

  return (
    <div className='test-container'>
      <div className='app-container'>
        <div className='title-container tc'>
          <h1 className='title'>Robofriends</h1>
        </div>
        <SearchBox onInputChange={onInputChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} searchKey={searchKey} />
          </ErrorBoundry>
        </Scroll>
      </div>
    </div>
  );
}