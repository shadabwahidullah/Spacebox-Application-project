import axios from 'axios';
import { BASE_URL, ACCESS_TOKEN } from './consts';

const SEARCH_REPOS_URL = `${BASE_URL}/search/repositories?q=`;

export const SEARCH_REPOS = 'spacebox/redux/newRepoReducer/SEARCH_REPOS';

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

const initialState = { SearchRes: [] };

const newRepoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_REPOS:
      return { ...state, SearchRes: action.payload };
    default:
      return state;
  }
};

export default newRepoReducer;
