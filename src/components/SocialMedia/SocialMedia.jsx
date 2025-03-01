import React, { useState } from 'react'
import './SocialMedia.css'

const SocialMedia = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  return (
    <div className="social-media">
      <button className="socialButton" onClick={toggleDropdown}>
        <img
          src="src/assets/loudspeaker.png"
          style={{ filter: 'invert(1)', right: '-370px', top: '-45px' }}
          className="horn"
        />
        <img
          src="src/assets/flechaAbajo.png"
          style={{
            filter: 'invert(1)',
            right: '-370px',
            top: '-45px',
            width: '10px',
            height: '10px',
          }}
          className="horn"
        />
      </button>
      {isDropdownOpen && (
        <div className="social-media-dropdown">
          <ul className="social-media-list">
            <li>
              <img src="src/assets/Twitter.png" className="imageList" />
              Twitter
            </li>
            <li>
              <img src="src/assets/reddit.png" className="imageList" />
              Reddit
            </li>
            <li>
              <img src="src/assets/blog.png" className="imageList" />
              Blog
            </li>
            <li>
              <img src="src/assets/newsletter.png" className="imageList" />
              Newsletter
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}

export default SocialMedia
