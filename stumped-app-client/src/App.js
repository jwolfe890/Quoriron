import React, { Component } from 'react';
import Questions from './containers/questions'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div>
          <Questions />
        </div>
      </div>
    );
  }
}

export default App;
