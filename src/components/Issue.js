import React from 'react';

const Issue = (props) => {
  const { issue } = props;
  const { title, created_at: createdAt } = issue;
  return (
    <div className="rounded border border-2 m-2 p-3">
      <h6>{title}</h6>
      <p className="m-0">
        created at:
        {' '}
        {new Date(createdAt).toDateString()}
      </p>
    </div>
  );
};

export default Issue;
