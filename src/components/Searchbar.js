import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchRepos } from '../redux/newRepoReducer';
import { sortRepos } from '../redux/reposReducer';

const Searchbar = (props) => {
  const sorted = useSelector((state) => state.reposReducer.sorted);
  const { from } = props;
  const dispatch = useDispatch();
  const onSearch = (searchQuery) => {
    console.log(from);
    if (from === 'newRepo') {
      console.log('called search from new Repo');
      dispatch(searchRepos(searchQuery));
    } else if (from === 'home') {
      console.log('called search from home');
    }
  };
  return (
    <div className="row align-items-center">
      <form className={from === 'home' ? 'col-8' : ''}>
        <input
          className="form-control my-2 col-10"
          placeholder="Search for repositories"
          onChange={(event) => {
            console.log('filter', event.target.value);
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
              console.log('value of checkbox', event.target.checked);
              dispatch(sortRepos(event.target.checked));
            }}
          />
        </label>
      ) : ''}
    </div>
  );
};

export default Searchbar;
