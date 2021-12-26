import axios from 'axios';
import { BASE_URL, ACCESS_TOKEN } from './consts';

const FETCH_REPOS_URL = `${BASE_URL}/user/subscriptions`;

export const FETCH = 'spacebox/redux/reposReducer/FETCH_WATCHED_REPOS';
export const SORT = 'spacebox/redux/reposReducer/SORT_REPOS';

export const fetchWatchedRepos = () => (disptach) => {
  console.log('fetchRepos has been called');
  axios.get(FETCH_REPOS_URL, {
    headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
  }).then((response) => {
    console.log('response for fetchRepos is: ', response);
    disptach({ type: FETCH, payload: response.data });
  }).catch((error) => console.log(error.message));
};

export const sortRepos = (sorted) => (disptach) => {
  console.log('sorted is ', sorted);
  disptach({ type: SORT, payload: sorted });
};

const compare = (a, b) => {
  const { created_at: aCreated } = a;
  const { created_at: bCreated } = b;
  if (aCreated < bCreated) {
    return 1;
  }
  if (aCreated > bCreated) {
    return -1;
  }
  return 0;
};

const initialState = { Repos: [], sorted: false };

const reposReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      console.log('action payload is', action.payload);
      console.log('state is ', state);
      return { ...state, Repos: action.payload };
    case SORT:
    { const sortedRepo = state.Repos.sort((a, b) => compare(a, b));
      return { ...state, Repos: sortedRepo, sorted: action.payload };
    }
    default:
      return state;
  }
};

export default reposReducer;
