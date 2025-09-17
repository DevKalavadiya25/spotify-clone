import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer-column">
        <h3>Company</h3>
        <Link to="#">About</Link>
        <Link to="#">Jobs</Link>
        <Link to="#">For the Record</Link>
      </div>

      <div className="footer-column">
        <h3>Communities</h3>
        <Link to="#">For Artists</Link>
        <Link to="#">Developers</Link>
        <Link to="#">Advertising</Link>
        <Link to="#">Investors</Link>
        <Link to="#">Vendors</Link>
      </div>

      <div className="footer-column">
        <h3>Useful links</h3>
        <Link to="#">Support</Link>
        <Link to="#">Free Mobile App</Link>
      </div>

      <div className="footer-column">
        <h3>Spotify Plans</h3>
        <Link to="#">Premium Individual</Link>
        <Link to="#">Premium Duo</Link>
        <Link to="#">Premium Family</Link>
        <Link to="#">Premium Student</Link>
        <Link to="#">Spotify Free</Link>
      </div>

      <div className="social-icons">
        <Link to="#"><i className="fab fa-instagram"></i></Link>
        <Link to="#"><i className="fab fa-twitter"></i></Link>
        <Link to="#"><i className="fab fa-facebook-f"></i></Link>
      </div>
    </div>
  );
}
