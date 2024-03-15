import React, { useState } from 'react';
import './PlayPauseButton.css';

function PlayPauseButton() {
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleAnimation = () => {
    setIsPlaying(prevState => !prevState);
  };

  const handleVolumeButtonClick = event => {
    // Prevent the default action of the volume button
    event.preventDefault();
    // Add any additional functionality if needed
  };

  return (
    <div className="buttons">
      <div className="left" onClick={handleVolumeButtonClick}></div>
      <div className="animation" onClick={toggleAnimation}>
        <div id="first" className={isPlaying ? "play" : "pause"}></div>
        <div id="second" className={isPlaying ? "play" : "pause"}></div>
      </div>
      <div className="right" onClick={handleVolumeButtonClick}></div>
    </div>
  );
}

export default AnimatedButtons;
