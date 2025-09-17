import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'
import SpotifyLogo from '../assets/images/SpotifyLogo.png'

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="logo">
          <Link to="/">
            <img src={SpotifyLogo} alt="Logo" />
          </Link>
        </div>

        <div className="navigation">
          <ul>
            <li>
              <Link to="/">
                <span className="fa fa-home" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              {/* external link, keep <a> */}
              <a href="https://open.spotify.com/search" target="_blank" rel="noopener noreferrer">
                <span className="fa fa-search" />
                <span>Search</span>
              </a>
            </li>
            <li>
              <Link to="/library">
                <span className="fa fas fa-book" />
                <span>Your Library</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="navigation">
          <ul>
            <li>
              <Link to="/create-playlist">
                <span className="fa fa-home" />
                <span>Create Playlist</span>
              </Link>
            </li>
            <li>
              <Link to="/liked-songs">
                <span className="fa-solid fa-heart" />
                <span>Liked Songs</span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="policies">
          <ul>
            {/* external link */}
            <a href="https://www.spotify.com/in-en/legal/cookies-policy/" target="_blank" rel="noopener noreferrer">
              Cookies
            </a>
            <li>
              <Link to="https://www.spotify.com/in-en/legal/privacy-policy/">Privacy</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Sidebar
