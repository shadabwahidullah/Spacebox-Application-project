import React from 'react';
import { useSelector } from 'react-redux';
import Searchbar from './Searchbar';
import Repo from './Repo';

const NewRepo = () => {
  const searchResult = useSelector((state) => state.newRepoReducer);
  const populateRepo = (repo) => {
    const { id } = repo;
    return <Repo key={id} repo={repo} from="newRepo" />;
  };
  return (
    <div className="mb-5">
      <Searchbar from="newRepo" />
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-2">
        {searchResult.SearchRes.map((repo) => populateRepo(repo))}
      </div>
    </div>
  );
};

export default NewRepo;
