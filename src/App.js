import React, { Component } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Content from './components/Content';

class App extends Component {

  render() {
    return (
      <div>
        <Header name="Raji"/>
        <SideBar name="Raji"/>
        <Content />
      </div>
    );
  }
}

export default App;
