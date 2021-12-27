import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchRepos } from '../redux/newRepoReducer';
import { sortRepos, searchRepositories } from '../redux/reposReducer';

const Searchbar = (props) => {
  const sorted = useSelector((state) => state.reposReducer.sorted);
  const { from } = props;
  const dispatch = useDispatch();
  const onSearch = (searchQuery) => {
    if (from === 'newRepo') {
      dispatch(searchRepos(searchQuery));
    } else if (from === 'home') {
      dispatch(searchRepositories(searchQuery));
    }
  };
  return (
    <div className="row align-items-center">
      <form className={from === 'home' ? 'col-8' : ''}>
        <input
          className="form-control my-2 col-10"
          placeholder="Search for repositories"
          onChange={(event) => {
            onSearch(event.target.value);
          }}
        />
      </form>
      {from === 'home' ? (
        <label className="col-4" htmlFor="sortbydate">
          Sort by date:&nbsp;
          <input
            id="sortbydate"
            type="checkbox"
            checked={sorted}
            onChange={(event) => {
              dispatch(sortRepos(event.target.checked));
            }}
          />
        </label>
      ) : ''}
    </div>
  );
};

export default Searchbar;
