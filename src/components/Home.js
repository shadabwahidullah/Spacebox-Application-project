import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import { fetchWatchedRepos } from '../redux/reposReducer';
import Repo from './Repo';

const Home = () => {
  const watchedRepos = useSelector((state) => state.reposReducer);
  console.log('watched repos are: ', watchedRepos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWatchedRepos());
  }, []);

  const populateRepo = (repo) => {
    const {
      id,
    } = repo;
    return <Repo key={id} repo={repo} />;
  };
  return (
    <div className="row">
      <Navbar />
      <Searchbar />
      {watchedRepos.Repos.map((repo) => populateRepo(repo))}
    </div>
  );
};

export default Home;
