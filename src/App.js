import React, { Component } from 'react';
import './App.css';
import Routes from './Routes';
import './reset.css';

class App extends Component {
  render() {
    return (
      <div id="app">
        <Routes/>
      </div>
    );
  }
}

export default App;
