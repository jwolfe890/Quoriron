import React, { Component } from 'react';
import { connect } from 'react-redux';

import { createAnswer } from '../actions/answers'
import { getQuestions } from '../actions/questions';

class CreateAnswer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    }

  }
    // Should have a validation for title
  handleOnChange = event => {
    const { value } = event.target;

    this.setState({
      content: value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.createAnswer(this.state, this.props.questionId)
    this.setState({ content: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <div>
          <div>
            <p>Add an Answer</p>
          </div>
          <textarea
            name="content"
            value={this.state.content}
            onChange={this.handleOnChange}
          >
          </textarea>
        </div>
        <div>
          <button
            type="submit"
          >
            Add Answer
          </button>
        </div>
      </form>
    );
  }
}

export default connect(null, {createAnswer})(CreateAnswer);


