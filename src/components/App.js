import React, { Component } from 'react';
import '../App.css';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import Questions from '../containers/questions'
import Question from '../containers/question'
import askQuestion from '../containers/askquestion'
import Navbar from '../components/Navbar'
import Home from '../components/Home'

import { getQuestions } from '../actions/questions'
import { connect } from 'react-redux';

class App extends Component {

  componentDidMount() {
    this.props.getQuestions()
  }

  render() {    
    return (
      <Router>
        <div className="App">
          <Navbar />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/questions/new' component={askQuestion}/>
              <Route path='/questions/:questionId' component={Question}/>
              <Route path='/questions' component={Questions}/>
            </Switch>
        </div>
      </Router>
    );
  }
}

export default connect(null, { getQuestions })(App);




