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

// ** Async Actions **
export const getAnswers = (questionId) => {
  return dispatch => {
    return fetch(`${API_URL}/questions/${questionId}/answers`)
      .then(response => response.json())
      .then(answers => dispatch(setAnswers(answers, questionId)))
  };
};



