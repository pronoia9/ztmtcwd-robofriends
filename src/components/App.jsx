import React, { useState, useEffect } from 'react';
// components
import Div from '../utils/Div';
import ErrorBoundry from '../utils/ErrorBoundry';
import Header from './Header/Header';
import SearchBox from './SearchBox/SearchBox';
import Scroll from '../utils/Scroll';
import CardList from './Card/CardList';
import Footer from './Footer/Footer';
// logo
const logo = require('../assets/images/logo.png');

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
    <Div ids={['app-body']} classNames={['template-color-1 box-wrapper spybody', 'main-page-wrapper']}>
      <Div ids={['portfolio']} classNames={['rn-portfolio-area rn-section-gap section-separator', 'container']}>
        <Header />
        <SearchBox onInputChange={onInputChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} searchKey={searchKey} />
          </ErrorBoundry>
        </Scroll>
      </Div>
      <Footer logo={logo} />
    </Div>
  );
}