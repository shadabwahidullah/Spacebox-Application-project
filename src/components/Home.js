import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Searchbar from './Searchbar';
import { fetchWatchedRepos } from '../redux/reposReducer';
import Repo from './Repo';

const Home = () => {
  const watchedRepos = useSelector((state) => state.reposReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWatchedRepos());
  }, []);

  const populateRepo = (repo) => {
    const {
      id,
    } = repo;
    return <Repo key={id} repo={repo} from="home" />;
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
