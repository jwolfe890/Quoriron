import {
  createStore,
  applyMiddleware,
  combineReducers
} from 'redux';
import thunk from 'redux-thunk';

import questions from './reducers/questionsReducer';
import questionFormData from './reducers/questionFormData';


const reducers = combineReducers({
  questions,
  questionFormData
});

const middleware = [thunk];

export default createStore(
  reducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware)
);