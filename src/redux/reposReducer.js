import axios from 'axios';
import { BASE_URL, ACCESS_TOKEN } from './consts';

const FETCH_REPOS_URL = `${BASE_URL}/user/subscriptions`;

export const FETCH = 'spacebox/repos/FETCH_WATCHED_REPOS';

export const fetchWatchedRepos = () => (disptach) => {
  console.log('fetchRepos has been called');
  axios.get(FETCH_REPOS_URL, {
    headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
  }).then((response) => {
    console.log('response for fetchRepos is: ', response);
    disptach({ type: FETCH, paylod: response.data });
  }).catch((error) => console.log(error.message));
};

const initialState = { Repos: {} };

const reposReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      console.log('action payload is', action.paylod);
      console.log('state is ', state);
      return { ...state, Repos: action.paylod };
    default:
      return state;
  }
};

export default reposReducer;
