import axios from 'axios';
import { BASE_URL, ACCESS_TOKEN } from './consts';

const SEARCH_REPOS_URL = `${BASE_URL}/search/repositories?q=`;
// const ADD_REPOS_URL = `${BASE_URL}/repos`;

const SEARCH_REPOS = 'spacebox/redux/newRepoReducer/SEARCH_REPOS';
const ADD_REPOS = 'spacebox/redux/newRepoReducer/ADD_REPOS';

export const searchRepos = (query, sorted) => (dispatch) => {
  console.log('search query is: ', query);
  axios.get(`${SEARCH_REPOS_URL}${query}+in:name+followers:>=200`, {
    headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
  }).then((response) => {
    console.log('search has been called', sorted);
    console.log('search result is ', response.data.items);
    dispatch({ type: SEARCH_REPOS, payload: response.data.items });
  }).catch((error) => { console.log(error.message); });
};

export const addRepos = (login, name) => (dispatch) => {
  console.log('add project has been called: ', login, name);
  axios.put(`${BASE_URL}/repos/${login}/${name}/subscription`, { subscribed: 'true' }, {
    headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
  }).then((response) => {
    console.log('add to watch list', response);
    dispatch({ type: ADD_REPOS, payload: '' });
  }).catch((error) => { console.log(error.message); });
};

const initialState = { SearchRes: [] };

const newRepoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REPOS:
      return { ...state, SearchRes: action.payload };
    case ADD_REPOS:
      return { ...state };
    default:
      return state;
  }
};

export default newRepoReducer;
