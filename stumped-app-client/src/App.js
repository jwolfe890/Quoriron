import React, { Component } from 'react';
import Questions from './components/questions'
import QuestionService from './services/Questionservice';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questions: []
    }
  }

componentDidMount() {
  QuestionService.fetchQuestions().then(questions => this.setState({ questions }))
}

  render() {
    return (
      <div className="App">
        <div>
          <Questions questions={this.state.questions}/>
        </div>
      </div>
    );
  }
}

export default App;
