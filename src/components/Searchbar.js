import React from 'react';

const Searchbar = () => (
  <div className="row">
    <form>
      <input
        className="form-control my-2"
        placeholder="Search for images"
        onChange={(event) => {
          console.log('filter', event);
        }}
      />
    </form>
  </div>
);

export default Searchbar;
