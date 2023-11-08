import React from "react";

const NavBar = ({ totalCounters }) => {
  console.log("navbar-rendered");
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          NavBar
          <span className="badge text-bg-warning rounded-pill text-bg-warning m-2">
            {totalCounters}
          </span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
