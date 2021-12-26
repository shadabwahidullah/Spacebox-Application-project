import React from 'react';

const Repo = (props) => {
  const { repo } = props;
  const {
    id, name, open_issues: openIssues, forks_count: forksCount, owner, created_at: dates,
  } = repo;
  const date = new Date(dates).toDateString();
  console.log('date is : ', date);
  const { login: ownerName } = owner;
  return (
    <div className="col">
      <div key={id} className="p-3 text-center bg-primary rounded py-2 g-2 repo">
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
        <span className="text-light pt-4">
          {' '}
          <h6>
            Created At:
            {' '}
            {' '}
            {date}
          </h6>
        </span>
        <button className="btn-warning rounded px-5 py-1 mt-4" type="button">add to watch</button>
      </div>
    </div>
  );
};

export default Repo;
