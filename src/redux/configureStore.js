import { applyMiddleware, createStore, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reposReducer from './reposReducer';

const reducer = combineReducers({
  reposReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
