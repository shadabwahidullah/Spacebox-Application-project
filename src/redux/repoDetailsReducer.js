import axios from 'axios';
import { BASE_URL } from './consts';

const GET_REPO = 'spacebox/redux/repoDetailsReducer/GET_REPO';
const GET_ISSUES = 'spacebox/redux/repoDetailsReducer/GET_ISSUES';

const GET_REPO_URL = `${BASE_URL}/repos`;
const GET_ISSUES_URL = `${BASE_URL}/repos`;

export const getRepo = (name, repo) => (dispatch) => {
  axios.get(`${GET_REPO_URL}/${name}/${repo}`).then((response) => {
    console.log('the repo is: ', response);
    dispatch({ type: GET_REPO, payload: response.data });
  });
};

export const getIssues = (name, repo) => (dispatch) => {
  axios.get(`${GET_ISSUES_URL}/${name}/${repo}/issues?sort=created&state=open&per_page=5`).then((response) => {
    console.log('issues for this repo is', response.data);
    dispatch({ type: GET_ISSUES, payload: response.data });
  }).catch((error) => {
    console.log(error.message);
  });
};

const initialState = { SelectedRepo: {}, Issues: [] };

const repoDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPO:
      return { ...state, SelectedRepo: action.payload };
    case GET_ISSUES:
      return { ...state, Issues: action.payload };
    default:
      return state;
  }
};
export default repoDetailsReducer;
