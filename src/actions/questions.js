const API_URL = process.env.REACT_APP_API_URL;

// Action Creators
const setQuestions = questions => {
  return {
    type: 'GET_QUESTIONS_SUCCESS',
    questions
  }
}

const addQuestion = question => {
  return {
    type: 'CREATE_QUESTION_SUCCESS',
    question
  }
}

const addQuestionData = question => {
  return {
    type: 'CREATE_DATA_SUCCESS',
    question
  }
}

const removeQuestion = questionId => {
  return {
    type: 'DELETE_QUESTION_SUCCESS',
    questionId: questionId
  }
}

// Async Actions
export const getQuestions = () => {
  return dispatch => {
    return fetch(`${API_URL}/questions`)
    .then(response => response.json())
    .then(questions => dispatch(setQuestions(questions)))
    .catch(error => console.log(error));
  }
}

export const getQuestion = (questionId) => {
  return dispatch => {
    return fetch(`${API_URL}/questions/${questionId}`)
    .then(response => response.json())
    .then(question => {

        debugger

      dispatch(addQuestionData(question))

  })
    .catch(error => console.log(error));
  }
}

export const createQuestion = (question, routerHistory) => {
  return dispatch => {
    return fetch(`${API_URL}/questions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question: question }),
    })
      .then(response => response.json())
      .then(question => {
        dispatch(addQuestion(question));
        routerHistory.replace(`/questions/${question.id}`)
    })
      .catch(error => console.log(error))
  }
}

export function deleteQuestion(questionId, routerHistory) {
  return (dispatch) => {
    return fetch(`${API_URL}/questions/${questionId}`, {
      method: 'DELETE',
    }).then(res => {
      dispatch(removeQuestion(questionId))
      routerHistory.replace(`/`)
    })
  }
}





        
