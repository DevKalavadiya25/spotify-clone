// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "./components/Sidebar.css";
import "@fortawesome/fontawesome-free/css/all.min.css";


// Components
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import Playlists from "./components/Playlists";
import Preview from "./components/Preview.jsx";
import Footer from "./components/Footer.jsx";

// Pages
import Login from "./pages/login.jsx";
import SignUp from "./pages/sign-up.jsx";

// Dashboard Layout
const Dashboard = () => {
  return (
    <>
      <div className="app">
        <Topbar />
        <Sidebar />
        <Preview />
      </div>
      <div className="playlists">
        <Playlists />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
};

// Main App with Routes
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
