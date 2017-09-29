import { getQuestions } from './questions'

const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **
export const setAnswers = (answers, questionId) => {
  return {
    type: 'GET_ANSWERS_SUCCESS',
    answers,
    questionId: questionId 
  };
};

// answers[0].question_id

export const addAnswer = (answer) => {
  return {
    type: 'CREATE_ANSWER_SUCCESS',
    answer
  };
};

export const createAnswer = (answer, questionId) => {
  return dispatch => {
    return fetch(`${API_URL}/questions/${questionId}/answers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ answer: answer }),
    })
      .then(response => response.json())
      .then(answer => {
        dispatch(addAnswer(answer));
        dispatch(getQuestions())
    })
      .catch(error => console.log(error))
  }
}

// ** Async Actions **
export const getAnswers = (questionId) => {
  return dispatch => {
    return fetch(`${API_URL}/questions/${questionId}/answers`)
      .then(response => response.json())
      .then(answers => dispatch(setAnswers(answers, questionId)))
  };
};



