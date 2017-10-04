import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';

import questions from './reducers/questionsReducer';
import answers from './reducers/answersReducer';
import question from './reducers/questionReducer';

const reducers = combineReducers({
  questions,
  question,
  answers
});

const middleware = [thunk];

export default createStore(
  reducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);