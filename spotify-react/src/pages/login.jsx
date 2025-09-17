import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"; 
import "./login.css";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login successful ✅");
      navigate("/"); // Dashboard pe bhejega
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div id="form-ui">
      <form id="form" onSubmit={handleLogin}>
        <div id="form-body">
          <div id="welcome-lines">
            <Link to="/"> <div id="welcome-line-1">Spotify</div></Link>
            <div id="welcome-line-2">Welcome Back</div>
          </div>

          <div id="input-area">
            <div className="form-inp">
              <input 
                placeholder="Email Address" 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required 
              />
            </div>
            <div className="form-inp">
              <input 
                placeholder="Password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
              />
            </div>
          </div>

          <div id="submit-button-cvr">
            <button id="submit-button" type="submit">Login</button>
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <div id="forgot-pass">
            <Link to="#">Forgot password?</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
