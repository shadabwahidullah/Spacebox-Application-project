import axios from 'axios';
import { BASE_URL, ACCESS_TOKEN } from './consts';

const FETCH_REPOS_URL = `${BASE_URL}/user/subscriptions`;
const REMOVE_REPO_URL = `${BASE_URL}/repos`;

export const FETCH = 'spacebox/redux/reposReducer/FETCH_WATCHED_REPOS';
export const SORT = 'spacebox/redux/reposReducer/SORT_REPOS';
export const SEARCH = 'spacebox/redux/reposReducer/SEARCH_REPOS';
const REMOVE = 'spacebox/redux/reposReducer/REMOVE_REPO';

export const fetchWatchedRepos = () => (dispatch) => {
  axios.get(FETCH_REPOS_URL,
    { headers: { Authorization: `Bearer ${ACCESS_TOKEN}` } })
    .then((response) => {
      dispatch({ type: FETCH, payload: response.data });
    })
    .catch((error) => console.error(error.message));
};

export const sortRepos = (sorted) => (dispatch) => {
  dispatch({ type: SORT, payload: sorted });
};

export const searchRepositories = (query) => (dispatch) => {
  dispatch({ type: SEARCH, payload: query });
};

export const removeRepo = (owner, repoName) => (dispatch) => {
  axios.delete(`${REMOVE_REPO_URL}/${owner}/${repoName}/subscription`, {
    headers: { Authorization: `Bearer ${ACCESS_TOKEN}` },
  })
    .then(() => {
      dispatch({ type: REMOVE, payload: [repoName, owner] });
    }).catch((error) => {
      console.error(error.message);
    });
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

const filterRepos = (query, repos) => repos.filter((repo) => repo.name.includes(query));

const removeRepoState = (nameAndRepo, repos) => repos.filter(
  (repo) => repo.name !== nameAndRepo[0] && repo.owner.login !== nameAndRepo[1],
);

const initialState = { Repos: [], sorted: false, ReposBackup: [] };

const reposReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH:
      return { ...state, Repos: action.payload, ReposBackup: action.payload };

    case SORT:
    { const sortedRepo = state.Repos.sort((a, b) => compare(a, b));
      return { ...state, Repos: sortedRepo, sorted: action.payload };
    }

    case SEARCH: {
      const filtered = filterRepos(action.payload, state.ReposBackup);
      return { ...state, Repos: filtered }; }

    case REMOVE: {
      const remained = removeRepoState(action.payload, state.Repos);
      return { ...state, Repos: remained };
    }

    default:
      return state;
  }
};

export default reposReducer;
