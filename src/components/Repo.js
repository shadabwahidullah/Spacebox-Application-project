import React from 'react';

const Repo = (props) => {
  const { repo } = props;
  const {
    id, name, open_issues: openIssues, forks_count: forksCount, owner,
  } = repo;
  const { login: ownerName } = owner;
  return (
    <div key={id} className="col-sm-12 col-md-6 col-lg-4 text-center bg-primary rounded py-2 m-2">
      <h3 className="text-light">{name}</h3>
      <hr className="bg-light" />
      <span className="d-flex justify-content-around">
        <h6 className="text-light">
          Owner:
          {' '}
          {ownerName}
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
      <button className="btn-warning rounded px-5 py-1 mt-4" type="button">add to watch</button>
    </div>
  );
};

export default Repo;
