import React, { useState } from 'react';
import ReactPlayer from 'react-player';

const MediaPlayer = ({ url }) => {
  // url can be a local file endpoint, YouTube link, or Spotify embed
  const [playing, setPlaying] = useState(false);

  return (
    <div className="media-player">
      <ReactPlayer 
        url={url}
        playing={playing}
        controls={true}
        width="100%"
        height="100%"
      />
      <button onClick={() => setPlaying(!playing)}>
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default MediaPlayer;
