import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
// data
import robotsData from './robots.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robotsData,
      searchKey: 'a',
    };
  }

  onSearch = (e) => {
    this.setState({...this.state, searchKey: e.target.value});
  };

  render() {
    return (
      <div className='app-container'>
        <SearchBox onSearch={this.onSearch} />
        <CardList robots={this.state.robots.filter((robot) => robot.name.toLowerCase().includes(this.state.searchKey.toLowerCase()))} searchKey={this.state.searchKey} />
      </div>
    );
  }
}

export default App;
