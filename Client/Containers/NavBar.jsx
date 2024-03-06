import React, { useState } from "react";
import App from "../App.jsx";
import { useNavigate } from "react-router-dom";
// import MovingComponent, { selectedItems } from "react-moving-text";
// import { ReactElement } from 'react';
// import React from 'react';

const NavBar = () => {
  const navigate = useNavigate();


  return (
    <div className="backdrop-blur-sm bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-2xl navbar px-4">
      <div className="navbar-start">
        <a className="btn btn-ghost text-2xl ">ACNE-AI</a>
      </div>

      {/* moving text for news */}
      {/* <div className="navbar-center animate-infinite-scroll">Moving Words.</div> */}

      <div className="navbar-end">
        <div className="flex justify-center space-x-4">
          <button
            className="btn btn-secondary backdrop-blur-xl"
            onClick={() => navigate("/")}
          >
            Home
          </button>{" "}
          {/* dont think backdrop-blur-xl is doing anything*/}
          <button
            className="btn btn-secondary backdrop-blur-xl"
            onClick={() => navigate("/about")}
          >
            About
          </button>
          <button
            className="btn btn-secondary backdrop-blur-xl"
            onClick={() => navigate("/tool")}
          >
            Tool
          </button>
          <label className="cursor-pointer grid place-items-center">
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
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
