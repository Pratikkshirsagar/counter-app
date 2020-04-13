import React from 'react';

const Navbar = (props) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar <span className="badge badge-pill badge-secondary">{props.titalCounter}</span>
      </a>
    </nav>
  );
};

export default Navbar;
