import React, { Component } from 'react';
import './../styles/App.css';
import PodcastSearch from './PodcastSearch'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <PodcastSearch />
      </div>
    );
  }
}

export default App;
