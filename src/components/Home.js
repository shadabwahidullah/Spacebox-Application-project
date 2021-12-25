import React from 'react';
import Navbar from './Navbar';
import Searchbar from './Searchbar';

const Home = () => (
  <div className="row">
    <Navbar />
    <Searchbar />
    <h1>Home page</h1>
  </div>
);

export default Home;
