import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  function login(e) {
    e.preventDefault();
    console.log('login called');
  }
  return (
    <div className="row justify-content-center mt-5">
      <form className="col-6">
        <h1 className="my-3">Login</h1>
        <input className="form-control my-2" type="text" name="username" placeholder="username" />
        <input className="form-control my-2" type="text" name="password" placeholder="password" />
        <button
          className="btn-primary rounded px-3 m-2 align-self-center"
          type="submit"
          onClick={(e) => {
            login(e);
          }}
        >
          submit
        </button>
      </form>
    </div>
  );
};

export default Login;
