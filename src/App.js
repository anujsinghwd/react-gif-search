import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Searchbar from './components/Searchbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to GIF Search APP</h1>
        </header>
        <br />
        <Header />
        <br />
        <Searchbar />        
      </div>
    );
  }
}

export default App;
