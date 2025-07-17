import React from 'react'
import '../css/VideoBackground.css'
import bgVideo from '../assets/bg.mp4';
import App from '../App';

const VideoBackground = () => {
  return (
    <div className='video-container'>
        <video autoPlay muted loop className='background-video'>
            <source src={bgVideo} type='video/mp4' />
        </video>

        <div className="overlay-content">
            <App/>
        </div>
    </div>
  )
}

export default VideoBackground