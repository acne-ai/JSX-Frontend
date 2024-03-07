import React, { useState } from "react";
import App from "../App.jsx";
import { useNavigate } from "react-router-dom";
// import MovingComponent, { selectedItems } from "react-moving-text";
// import { ReactElement } from 'react';
// import React from 'react';

const NavBar = () => {
  const navigate = useNavigate();


  return (
    <div className="backdrop-blur-sm bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl navbar px-8 mx-4 bg-opacity-0.5">
      <div className="navbar-start">
        <a className="btn btn-ghost text-2xl"onClick={() => navigate("/")}>ACNE-AI</a>
      </div>

      {/* moving text for news */}
      {/* <div className="navbar-center animate-infinite-scroll">Moving Words.</div> */}

      <div className="navbar-end mx-8">
        <div className="flex justify-center space-x-4">
          <button
            className="btn btn-secondary backdrop-blur-xl rounded-full bg-opacity-0.75"
            onClick={() => navigate("/")}
          >
            Home
          </button>{" "}
          {/* dont think backdrop-blur-xl is doing anything*/}
          <button
            className="btn btn-secondary backdrop-blur-xl rounded-full bg-opacity-0.75"
            onClick={() => navigate("/about")}
          >
            About
          </button>
          <button
            className="btn btn-secondary backdrop-blur-xl rounded-full bg-opacity-0.75"
            onClick={() => navigate("/tool")}
          >
            Tool
          </button>

          

        </div>
      </div>
    </div>
  );
};

export default NavBar;

/* PASTE ZONE

          <a className="btn btn-accent">Tool</a>

        <div className="navbar-center">
          <a className="btn btn-secondary">About</a>
        </div>

        /Users/carlosrevilla/Desktop/Coding-Examples/Javascript examples/space.me/__testing__
*/
