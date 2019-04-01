import React, { Component } from 'react';
import { BrowserRouter as Router,Switch} from 'react-router-dom'
// import Main from './views/layout'
import MainRouter from './routers/Main'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      config: 'aaaaa'
    }
  }
  render() {
    return (
      <Router>
        <Switch>
          < MainRouter config={this.state.config}></MainRouter>
        </Switch>
      </Router>
    );
  }
}

export default App;
