import React, { Component } from 'react';
// components
import SearchBox from './SearchBox';
import CardList from './CardList';
import Scroll from './Scroll';
// styles
import './css/App.css';

class App extends Component {
  // MOUNTING FUNCTIONS
  constructor() {
    super();
    this.state = {
      robots: [],
      searchKey: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  render() {
    const filteredRobots = this.state.robots.filter((robot) => robot.name.toLowerCase().includes(this.state.searchKey.toLowerCase()));
    filteredRobots.length === 0 ? this.changeHtmlHeight('100%') : this.changeHtmlHeight('');

    return (
      <div className='test-container'>
        <div className='app-container'>
          <div className='title-container tc'>
            <h1 className='title'>Robofriends</h1>
          </div>
          <SearchBox onSearch={this.onSearch} />
          <Scroll>
            <CardList robots={filteredRobots} searchKey={this.state.searchKey} />
          </Scroll>
        </div>
      </div>
    );
  }

  // UPDATING FUNCTIONS
  // shouldComponentUpdate() { console.log('should Component Update'); }
  // componentDidUpdate() { console.log('component Did Update'); }

  // UNMOUNTING FUNCTIONS
  // componentWillUnmount() { console.log('component Will Unmount'); }

  // OTHER FUNCTIONS
  onSearch = (e) => {
    this.setState({ searchKey: e.target.value });
  };

  changeHtmlHeight = (height) => {
    document.getElementsByTagName('html')[0].style.height = height;
  };
}

export default App;
