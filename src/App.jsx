import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
// data
import robots from './robots.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchKey: '',
    };
  }
  render() {
    return (
      <div className='app-container'>
        <SearchBox searchKey={this.state.searchKey} />
        <CardList robots={this.state.robots} searchKey={this.state.searchKey} />
      </div>
    );
  }
}

export default App;
