import React from "react";
import "./../App.css";
import "./../components/Sidebar.css";
import Sidebar from "./../components/Sidebar";
import Topbar from "./../components/Topbar";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Playlists from "./../components/Playlists";
import Preview from "./../components/Preview.jsx";
import Footer from "./../components/Footer.jsx";
import "./../components/Topbar.css";
import "./../components/Preview.css";
import "./../components/Footer.css";
import "./../components/Playlist.css";


const Home = () => {
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

export default Home;
