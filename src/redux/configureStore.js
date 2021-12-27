import { applyMiddleware, createStore, combineReducers } from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reposReducer from './reposReducer';
import newRepoReducer from './newRepoReducer';
import repoDetailsReducer from './repoDetailsReducer';

const reducer = combineReducers({
  reposReducer,
  newRepoReducer,
  repoDetailsReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));
// to see state log at each step replace the line above
// with the line bellow and un-comment the logger import
// const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
