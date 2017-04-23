import React, { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import SideBar from './components/nav/SideBar';


class App extends Component {
  render() {
    return (
      <div className="App">
        <SideBar />
        <div className="main-content">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Reacta</h2>
            {this.props.children}
        </div>
      </div>
    );
  }
}


export default App;
