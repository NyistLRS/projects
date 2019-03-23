import React, { Component } from 'react';
import  RouterView  from './router/index'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <RouterView></RouterView>
      </div>
    );
  }
}

export default App;
