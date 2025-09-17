import React from "react";
import "./Topbar.css"; // Assuming you have a CSS file for styling
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <>
      <div className="topbar">
        <div className="prev-next-buttons">
          <button type="button" className="fa fas fa-chevron-left" />
          <button type="button" className="fa fas fa-chevron-right" />
        </div>
        <div className="navbar">
          <ul>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
          <Link to="/login">

            <button type="button">Login</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Topbar;
