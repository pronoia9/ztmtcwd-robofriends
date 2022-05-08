import React, { Component } from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
// styles
import './css/App.css';

class App extends Component {
  // MOUNTING FUNCTIONS
  constructor() {
    super();
    this.state = {
      robots: [],
      searchKey: 'a',
    };
  }

  render() {
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

  componentDidMount() {
    console.log('did mount');
  }

  // UPDATING FUNCTIONS
  shouldComponentUpdate() { console.log('should Component Update'); }
  componentDidUpdate() { console.log('component Did Update'); }

  // UNMOUNTING FUNCTIONS
  componentWillUnmount() { console.log('component Will Unmount'); }

  // OTHER FUNCTIONS
  onSearch = (e) => {
    this.setState({ ...this.state, searchKey: e.target.value });
    e.target.value === '' ? this.changeHtmlHeight('') : this.changeHtmlHeight('100%');
  };

  changeHtmlHeight = (height) => { document.getElementsByTagName('html')[0].style.height = height; };
}

export default App;
