import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// components
import Div from '../utils/Div';
import ErrorBoundry from '../utils/ErrorBoundry';
import Header from './Header/Header';
import SearchBox from './SearchBox/SearchBox';
import Scroll from '../utils/Scroll';
import CardList from './Card/CardList';
import Footer from './Footer/Footer';
// redux
import { requestRobots, setSearchField } from '../redux/actions';
const mapStateToProps = (state) => ({
  robots: state.requestRobots.robots,
  isPending: state.requestRobots.isPending,
  error: state.requestRobots.error,
  searchField: state.searchRobots.searchField,
});
const mapDispatchToProps = (dispatch) => ({
  onRequestRobots: () => dispatch(requestRobots()),
  onInputChange: (event) => dispatch(setSearchField(event.target.value)),
});
// logo
const logo = require('../assets/images/logo.png');

const App = (props) => {
  const { robots, isPending, error, onRequestRobots, searchField, onInputChange } = props;

  // get robotos list
  useEffect(() => onRequestRobots(), []);
  const filteredRobots = robots.filter((robot) => robot.name.toLowerCase().includes(searchField.toLowerCase()));

  return (
    <Div ids={['app-body']} classNames={['template-color-1 box-wrapper spybody', 'main-page-wrapper']}>
      <Div ids={['portfolio']} classNames={['rn-portfolio-area rn-section-gap section-separator', 'container']}>
        <Header />
        <SearchBox onInputChange={onInputChange} />
        <Scroll>
          <ErrorBoundry>
            <CardList robots={filteredRobots} />
          </ErrorBoundry>
        </Scroll>
      </Div>
      <Footer logo={logo} />
    </Div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);