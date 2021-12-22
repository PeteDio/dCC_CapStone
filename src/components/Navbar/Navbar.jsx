import React, { useState } from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="left">
        <a className="button" href="/home">
          Home
        </a>
        <a className="button" href="/profile">
          Profile
        </a>
        <a className="button" href="/logout">
          Logout
        </a>
      </div>
      <div className="right">
        <a className="button" href="/search">
          Look for recipes
        </a>
      </div>
    </div>
  );
};

export default Navbar;
