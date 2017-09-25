import React, { Component } from 'react';

class CreateAnswer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    }

  }

    // Should have a validation for title
  handleOnChange = event => {
    const { answer, value } = event.target;
    this.setState({
      answer: value
    });
  }

  handleOnSubmit = event => {
    event.preventDefault()
    const { history, createAnswer } = this.props
    createAnswer(this.state, history)
    this.setState({ content: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <input
          type="text"
          name="answer"
          value={this.state.content}
          onChange={this.handleOnChange}
          placeholder="Add an Answer"
        />
        <button>Answer</button>
      </form>
    );
  }
}

export default CreateAnswer;
