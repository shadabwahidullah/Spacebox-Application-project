import axios from 'axios';
import { BASE_URL, ACCESS_TOKEN } from './consts';

const GET_REPO = 'spacebox/redux/repoDetailsReducer/GET_REPO';
const GET_ISSUES = 'spacebox/redux/repoDetailsReducer/GET_ISSUES';
const CREATE_ISSUE = 'spacebox/redux/repoDetailsReducer/CREATE_ISSUES';

const GET_REPO_URL = `${BASE_URL}/repos`;
const GET_ISSUES_URL = `${BASE_URL}/repos`;

export const getRepo = (name, repo) => (dispatch) => {
  axios.get(`${GET_REPO_URL}/${name}/${repo}`).then((response) => {
    const { data } = response;
    axios.get(`${GET_REPO_URL}/${name}/${repo}/pulls?state=open`).then((prResonse) => {
      data.noPR = prResonse.data.length;
      dispatch({ type: GET_REPO, payload: data });
    }).catch((error) => { console.error(error.message); });
  }).catch((error) => {
    console.error(error.message);
  });
};

export const getIssues = (name, repo) => (dispatch) => {
  axios.get(`${GET_ISSUES_URL}/${name}/${repo}/issues?sort=created&state=open&per_page=5`).then((response) => {
    dispatch({ type: GET_ISSUES, payload: response.data });
  }).catch((error) => {
    console.error(error.message);
  });
};

export const createIssue = (name, repo, data) => (dispatch) => {
  axios.post(`${GET_ISSUES_URL}/${name}/${repo}/issues`,
    data,
    {
      headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
    }).then((response) => {
    dispatch({ type: CREATE_ISSUE, payload: response.data });
  }).catch((error) => {
    console.error(error.message);
  });
};

const initialState = { SelectedRepo: { owner: {} }, Issues: [] };

const repoDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPO:
      return { ...state, SelectedRepo: action.payload };
    case GET_ISSUES:
      return { ...state, Issues: action.payload };
    case CREATE_ISSUE:
    { const tmp = state.Issues.slice(0, 4);
      return { ...state, Issues: [action.payload, ...tmp] }; }
    default:
      return state;
  }
};
export default repoDetailsReducer;
