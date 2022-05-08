import React, { Component } from 'react';
// components
import SearchBox from '../components/SearchBox';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll';
// styles
import './App.css';

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
    const { robots, searchKey } = this.state;
    const { changeHtmlHeight, onSearch } = this;
    const filteredRobots = robots.filter((robot) => robot.name.toLowerCase().includes(searchKey.toLowerCase()));
    !filteredRobots.length ? changeHtmlHeight('100%') : changeHtmlHeight('');

    return (
      <div className='test-container'>
        <div className='app-container'>
          <div className='title-container tc'>
            <h1 className='title'>Robofriends</h1>
          </div>
          <SearchBox onSearch={onSearch} />
          <Scroll>
            <CardList robots={filteredRobots} searchKey={searchKey} />
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
