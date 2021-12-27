import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { getRepo, getIssues } from '../redux/repoDetailsReducer';

const RepoDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { name, repoName } = params;
  useEffect(() => { dispatch(getRepo(name, repoName)); }, []);
  useEffect(() => { dispatch(getIssues(name, repoName)); }, []);
  console.log('key at repo details is: ', params);

  return (<h1> something</h1>);
};

export default RepoDetails;
