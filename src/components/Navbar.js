import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <Link to="/" exact>
        <h1 className="navbar-brand">Spacebox</h1>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" activeClassName="active" to="/" exact>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" activeClassName="active" to="/liked_repos">Repos</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
