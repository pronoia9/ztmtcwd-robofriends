import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
// data
import robots from './robots.json';

const onSearch = (e) => {
  // this.state.searchKey = e.target.value;
  console.log(`${this.state.searchKey}   |   ${e.target.value}`);
};
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
        <SearchBox onSearch={onSearch} />
        <CardList robots={this.state.robots} searchKey={this.state.searchKey} />
      </div>
    );
  }
}

export default App;
