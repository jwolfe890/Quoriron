import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateAnswer from './createAnswer'

import { deleteQuestion } from '../actions/questions'

class questionCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      question: ""
    }

    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete = () => {
    const { history } = this.props
    deleteQuestion(this.state.question.id, history)
  }

  componentDidMount() {
    const { questionId } = this.props.match.params
    const { questions } = this.props
    const question = questions.find(question => question.id == questionId)
      this.setState({
        question
      })
  }

  render() {
    const { match } = this.props

    return (
        <div>
        { this.state.question ?
          <div>
            <h4>{this.state.question.title}</h4>
            <p>{this.state.question.details}</p>
            <button onClick={this.handleDelete}>Delete</button>
            <CreateAnswer questionId={match.params.questionId} />
          </div>
        : "Loading" 
        }
        </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return ({
    questions: state.questions
  })
}

export default connect(mapStateToProps, { deleteQuestion })(questionCard);
