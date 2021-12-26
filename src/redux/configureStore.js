import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reposReducer from './reposReducer';
import newRepoReducer from './newRepoReducer';

const reducer = combineReducers({
  reposReducer,
  newRepoReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
