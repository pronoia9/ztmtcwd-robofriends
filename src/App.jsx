import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
// data
import robotsData from './robots.json';
// styles
import './css/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robotsData,
      searchKey: 'a',
    };
  }

  onSearch = (e) => {
    this.setState({ ...this.state, searchKey: e.target.value });

    e.target.value === '' ? (document.getElementsByTagName('html')[0].style.height = '') : (document.getElementsByTagName('html')[0].style.height = '100%');
  };

  render() {
    return (
      <div className='test-container'>
        <div className='app-container'>
          <div className='title-container tc'>
            <h1 className='title'>Robofriends</h1>
          </div>
          <SearchBox onSearch={this.onSearch} />
          <CardList robots={this.state.robots.filter((robot) => robot.name.toLowerCase().includes(this.state.searchKey.toLowerCase()))} searchKey={this.state.searchKey} />
        </div>
      </div>
    );
  }
}

export default App;
