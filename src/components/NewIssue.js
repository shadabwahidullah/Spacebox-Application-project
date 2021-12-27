import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { createIssue } from '../redux/repoDetailsReducer';

const NewIssue = () => {
  const dispatch = useDispatch();
  const [data, setData] = useState({ title: '' });

  const handle = (e) => {
    const newData = { ...data };
    newData.title = e.target.value;
    setData(newData);
  };

  const params = useParams();
  const { name, repoName } = params;
  const controlForm = (event) => {
    event.preventDefault();
    dispatch(createIssue(name, repoName, data));
  };

  return (
    <div className="col mb-4">
      <form
        className="p-3 text-center bg-primary rounded py-2 g-2"
        onSubmit={(event) => { controlForm(event); }}
      >
        <h3 className="text-light">Create a new Issue</h3>
        <hr className="bg-light" />
        <input
          className="form-control"
          type="text-area"
          value={data.title}
          onChange={(e) => handle(e)}
          required
          placeholder="Describe the issue here"
        />
        <button type="submit" className="btn-info rounded text-light px-4 py-1 mt-3">Create</button>
      </form>
    </div>
  );
};

export default NewIssue;
