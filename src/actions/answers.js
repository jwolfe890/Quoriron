const API_URL = process.env.REACT_APP_API_URL;

// ** Action Creators **
export const setAnswers = (answers, questionId) => {
  return {
    type: 'GET_ANSWERS_SUCCESS',
    answers,
    questionId: questionId 
  };
};

export const addAnswer = (answer, questionId) => {
  return {
    type: 'CREATE_ANSWER_SUCCESS',
    answer,
    questionId: questionId
  };
};

export const updateAnswer = (answer, questionId) => {
  return {
    type: 'UPDATE_ANSWER_SUCCESS',
    answer,
    questionId: questionId
  };
}

// ** Async Actions **
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
        dispatch(addAnswer(answer, questionId));
    })
      .catch(error => console.log(error))
  }
}

export const getAnswers = (questionId) => {
  return dispatch => {
    return fetch(`${API_URL}/questions/${questionId}/answers`)
      .then(response => response.json())
      .then(answers => dispatch(setAnswers(answers, questionId)))
  };
};

export const changeAnswer = (questionId, updatedAnswer) => {
    
    return dispatch => {
        return fetch(`${API_URL}/questions/${questionId}/answers/${updatedAnswer.id}`, {
            method: 'PUT',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                answer: updatedAnswer
            })
        })
        .then(response => response.json())
        .then(answer => {
            dispatch(updateAnswer(answer, questionId));
        })
    };
};


