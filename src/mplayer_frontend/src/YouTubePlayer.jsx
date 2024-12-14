// YouTubePlayer.jsx
import React, { useState } from 'react';
import ReactPlayer from 'react-player/youtube';

const YouTubePlayer = ({ url }) => {
  const [playing, setPlaying] = useState(false);

  // Make sure the URL is a valid YouTube link. For production,
  // you might add checks or extract the video ID from user input.
  return (
    <div className="youtube-player-container">
      <ReactPlayer
        url={url}
        playing={playing}
        controls={true}
        width="100%"
        height="360px"
      />
      <div style={{ marginTop: '10px' }}>
        <button onClick={() => setPlaying(!playing)}>
          {playing ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
};

export default YouTubePlayer;
