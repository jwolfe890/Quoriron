const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **
export const setAnswers = answers => {
  return {
    type: 'SET_ANSWERS',
    answers,
    postId: answers[0].question.id
  };
};

// ** Async Actions **
export const getAnswers = questiontId => {
  return dispatch => {
    return fetch(`${API_URL}/questions/${questionId}/answers`)
      .then(response => response.json())
      .then(answers => {
        dispatch(setAnswers(answers));
      })
      .catch(error => console.log(error));
  };
};
