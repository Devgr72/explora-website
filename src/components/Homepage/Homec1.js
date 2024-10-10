import React from 'react'
import '../../App.css';


import './Home.css'
import video from '../Assets/Home-video.mp4'
function Homec1() {
  return (
    <div className="home-container">
            <div className="info-section">
                <h1 className="info-title">Welcome to Explora</h1>
                <p className="info-description">
                    Explore the world like never before. Discover new places, connect with people, and enhance your travel experiences with our platform. 
                </p>
            </div>
            <div className="video-section">
                <video width="100%" height="auto" autoPlay loop muted>
                    <source src={video} type="video/mp4" />
                </video>
            </div>
        </div>
  )
}

export default Homec1
