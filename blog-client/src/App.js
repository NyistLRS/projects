import React, { Component } from 'react';
import  RouterView  from './router/index'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <RouterView></RouterView>
        </header>
      </div>
    );
  }
}

export default App;
