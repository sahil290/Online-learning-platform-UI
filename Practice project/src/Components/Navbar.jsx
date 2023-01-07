import React from "react";

const Navbar = () => {
  return (
    <>
      <div id="nav-main-wrapper">
        <span id="logo">
          <img src="../../media/LG.svg" />
          Ed-Cricle.
        </span>
        <div id="search-wrapper">
          <span id="p0">
            <img src="../../media/search.svg" />
            <input type="text" placeholder="Want to learn?" />
          </span>
          <span id="btn">
            Explore
            <img src="../../media/DD.svg" />
          </span>
        </div>
        <div id="w3">
          <span>Program</span>
          <span>Enterprise</span>
          <span>Universties</span>
        </div>
        <div id="w4">
          <span>Sign in</span>
          <button>Create free account</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
