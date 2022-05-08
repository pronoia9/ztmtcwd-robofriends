import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
// data
import robotsData from './robots.json'; //https://jsonplaceholder.typicode.com/users
// styles
import './css/App.css';

class App extends Component {
  // MOUNTING FUNCTIONS
  constructor() {
    super();
    this.state = {
      robots: robotsData,
      searchKey: 'a',
    };
  }

  componentWillMount() {}

  render() {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // robotsData.concat(data);
    //     data.map((e) => this.state.robots.push(e));
    //     console.log(`fetch: ${this.state.robots}`);
    //   });
    // console.log(`render: ${this.state.robots}`);
    !this.state.robots || this.state.robots.length === 0 ? this.changeHtmlHeight('100%') : this.changeHtmlHeight('');

    return (
      <div className='test-container'>
        <div className='app-container'>
          <div className='title-container tc'>
            <h1 className='title'>Robofriends</h1>
          </div>
          <SearchBox onSearch={this.onSearch} />
          <CardList robots={this.state.robots ? this.state.robots.filter((robot) => robot.name.toLowerCase().includes(this.state.searchKey.toLowerCase())) : ''} searchKey={this.state.searchKey} />
        </div>
      </div>
    );
  }

  componentDidMount() {}

  // UPDATING FUNCTIONS
  componentWillReceiveProps() {}
  shouldComponentUpdate() {}
  componentWillUpdate() {}
  componentDidUpdate() {}

  // UNMOUNTING FUNCTIONS

  // OTHER FUNCTIONS
  onSearch = (e) => {
    this.setState({ ...this.state, searchKey: e.target.value });

    e.target.value === '' ? this.changeHtmlHeight('') : this.changeHtmlHeight('100%');
  };

  changeHtmlHeight = (height) => {
    document.getElementsByTagName('html')[0].style.height = height;
  };
}

export default App;
