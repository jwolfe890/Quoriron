import React, { Component } from 'react';
import Questions from './containers/questions'
import questionCard from './containers/questionCard'
import askQuestion from './containers/askquestion'
import Navbar from './components/Navbar'

import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
            <Switch>
              <Route exact path='/' component={Questions}/>
              <Route path='/questions/new' component={askQuestion}/>
              <Route path='/questions/:questionId' component={questionCard}/>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
