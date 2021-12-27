import React from 'react';

const NewIssue = () => (
  <div className="col mb-4">
    <form className="p-3 text-center bg-primary rounded py-2 g-2">
      <h3 className="text-light">Create a new Issue</h3>
      <hr className="bg-light" />
      <input className="form-control" type="text-area" required placeholder="Describe the issue here" />
      <button type="submit" className="btn-info rounded text-light px-4 py-1 mt-3">Create</button>
    </form>
  </div>
);

export default NewIssue;
