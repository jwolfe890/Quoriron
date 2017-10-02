import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateAnswer from './createAnswer'

class questionCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  handleDelete = (event) => {
    
  }

  handleEdit = (event) => {

  }

  render() {
    const { questionId } = this.props.match.params
    const { questions, match } = this.props
    const question = questions.find(question => question.id == questionId)

    return (
        <div>
        { question ?
          <div>
            <h4>{question.title}</h4>
            <p>{question.details}</p>
            <button onClick={this.handleDelete}>Delete</button>
            <button onClick={this.handleEdit}>Edit</button>
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

export default connect(mapStateToProps)(questionCard);
