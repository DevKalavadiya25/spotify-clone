import React from 'react'
import './Preview.css' // Assuming you have a CSS file for styling
import { Link } from 'react-router-dom'

const Preview = () => {
  return (
    <>
    <div className="preview">
  <div className="text">
    <h6>Preview of Spotify</h6>
    <p>Sign up to get unlimited songs and podcasts with occasional ads. No credit card needed.</p>
  </div>
  <div className="button">
    <Link to="/signup"> <button type="submit">Sign up free</button></Link>
  </div>
</div>

    </>
  )
}

export default Preview