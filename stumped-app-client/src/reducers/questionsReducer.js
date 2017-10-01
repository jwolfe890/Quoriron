import answersReducer from './answersReducer';

export default (state = [], action) => {

  switch(action.type) {
    case 'GET_QUESTIONS_SUCCESS':
      return action.questions;

    case 'CREATE_QUESTION_SUCCESS':
      return state.concat(action.question);

    case 'GET_ANSWERS_SUCCESS':

      debugger

      const index = state.findIndex(question => question.id == action.questionId);
      const question = state[index];

      const updatedQuestion = Object.assign({}, question, {
        answers: action.answers });

      const addedAnswer = [...state.slice(0, index),
                    updatedQuestion,
                   ...state.slice(index + 1)
                  ]

      return addedAnswer

    default:
      return state;
 
  }
}

            // return [
            //     ...state.slice(0, index),
            //     updatedQuestion,
            //     ...state.slice(index + 1)
            // ];
      