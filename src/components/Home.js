import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Searchbar from './Searchbar';
import { fetchWatchedRepos } from '../redux/reposReducer';
import Repo from './Repo';

let flag = true;

const Home = () => {
  const watchedRepos = useSelector((state) => state.reposReducer);
  console.log('watched repos are: ', watchedRepos);
  const dispatch = useDispatch();
  useEffect(() => {
    if (flag) {
      dispatch(fetchWatchedRepos());
      flag = false;
    }
  }, []);

  const populateRepo = (repo) => {
    const {
      id,
    } = repo;
    return <Repo key={id} repo={repo} />;
  };
  return (
    <div>
      <Searchbar from="home" />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
        {watchedRepos.Repos.map((repo) => populateRepo(repo))}
      </div>
    </div>
  );
};

export default Home;
