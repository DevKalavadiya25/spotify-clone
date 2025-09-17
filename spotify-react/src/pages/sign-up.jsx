import React, { useState } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Signup successful ✅");
      navigate("/login");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div id="form-ui">
      <form id="form" onSubmit={handleSignup}>
        <div id="form-body">
          <div id="welcome-lines">
            <Link to="/"> <div id="welcome-line-1">Spotify</div></Link>
            <div id="welcome-line-2">Create Account</div>
          </div>

          <div id="input-area">
            <div className="form-inp">
              <input
                type="text"
                placeholder="Enter your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="form-inp">
              <input
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-inp">
              <input
                type="password"
                placeholder="Enter your Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <div id="submit-button-cvr">
            <button id="submit-button" type="submit">Sign Up</button>
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <p style={{ marginTop: "10px" }}>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
