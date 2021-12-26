import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './Navbar';
import Searchbar from './Searchbar';
import { fetchWatchedRepos } from '../redux/reposReducer';

const Home = () => {
  const watchedRepos = useSelector((state) => state.reposReducer);
  console.log('watched repos are: ', watchedRepos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchWatchedRepos());
  }, []);
  return (
    <div className="row">
      <Navbar />
      <Searchbar />
      <h1>Home page</h1>
    </div>
  );
};

export default Home;
