import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getRepo, getIssues } from '../redux/repoDetailsReducer';
import Issue from './Issue';

const RepoDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { name, repoName } = params;
  useEffect(() => { dispatch(getRepo(name, repoName)); }, []);
  useEffect(() => { dispatch(getIssues(name, repoName)); }, []);
  const { SelectedRepo, Issues } = useSelector((state) => state.repoDetailsReducer);

  console.log('key at repo details is: ', params);
  console.log('Issues are : ', Issues);
  console.log('selected repo is: ', SelectedRepo);

  const {
    id, open_issues: openIssues, forks_count: forksCount,
    owner, created_at: date, description, noPR,
  } = SelectedRepo;

  const { login } = owner;

  return (
    <div>
      <div key={id} className="p-3 text-center bg-primary rounded py-2 g-2 repo">
        <h3 className="text-light">{name}</h3>
        <h6 className="text-light text-start">
          Description:
        </h6>
        <hr className="col-3 bg-light mb-1" />
        <p className="text-light text-start ps-2">{description}</p>
        <hr className="bg-light" />
        <span className="d-flex justify-content-around">
          <h6 className="text-light">
            Owner:
            {' '}
            {login}
          </h6>
          <h6 className="text-light">
            Open issues:
            {' '}
            {openIssues}
          </h6>
          <h6 className="text-light">
            Forks count:
            {' '}
            {forksCount}
          </h6>
        </span>
        <span className="text-light pt-4 row">
          <h6 className="col-md-6">
            Created At:
            {' '}
            {new Date(date).toDateString()}
          </h6>
          <h6 className="col-md-6">
            Number of open PR:
            {' '}
            {noPR}
          </h6>
        </span>
      </div>
      <h4 className="m-3 mb-1">Latest Open Issues:</h4>
      {Issues.map((e) => <Issue key={e.id} issue={e} />)}
    </div>
  );
};

export default RepoDetails;
