import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateQuestionFormData } from '../actions/questionForm';
import { createQuestion } from '../actions/questions';

class AskQuestion extends Component {

  constructor(props) {
      super(props);
      this.state = {
        title: ""
      }
    }

  // handleOnChange = event => {
  //   const currentQuestionFormData = Object.assign( {}, this.props.questionFormData, {
  //     title: event.target.value
  //   })
  //   this.props.updateQuestionFormData(currentQuestionFormData)
  // }

  handleOnChange = event => {
    const { value } = event.target;
    this.setState({
      title: value
    });
  }


  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createQuestion(this.state)
    this.setState({ title: '' });
  }


  // handleOnSubmit = event => {
  //   event.preventDefault();
  //   this.props.createQuestion(this.props.questionFormData)
  // }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <input
          type="text"
          name="title"
          value={this.state.title}
          onChange={this.handleOnChange}
          placeholder="Ask a Question"
        />

        <button>Ask Question</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    questionFormData: state.questionFormData
  })
}

export default connect(mapStateToProps, { 
  updateQuestionFormData, 
  createQuestion 
})(AskQuestion);
