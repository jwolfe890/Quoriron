import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Products products={['products']}/>
        </div>
      </div>
    );
  }
}

export default App;
