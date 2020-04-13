import React from 'react';

const Navbar = ({ titalCounter }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar <span className="badge badge-pill badge-secondary">{titalCounter}</span>
      </a>
    </nav>
  );
};

export default Navbar;
