import React from 'react';
import { useDispatch } from 'react-redux';
import { searchRepos } from '../redux/newRepoReducer';

const Searchbar = (props) => {
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
    <div className="row">
      <form>
        <input
          className="form-control my-2"
          placeholder="Search for repositories"
          onChange={(event) => {
            console.log('filter', event.target.value);
            onSearch(event.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default Searchbar;
