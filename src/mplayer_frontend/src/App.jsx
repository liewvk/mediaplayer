// App.jsx (example)
import React, { useState } from 'react';
import YouTubePlayer from './YouTubePlayer';
import LocalMediaPlayer from './LocalMediaPlayer';

const App = () => {
  const [youtubeUrl, setYoutubeUrl] = useState('');

  return (
    <div>
      <h1>ICP Media Player</h1>

      <h2>Local Media</h2>
      <LocalMediaPlayer />

      <h2>YouTube</h2>
      <input
        type="text"
        placeholder="Enter a YouTube URL"
        value={youtubeUrl}
        onChange={(e) => setYoutubeUrl(e.target.value)}
        style={{ marginRight: '10px' }}
      />
      {youtubeUrl && <YouTubePlayer url={youtubeUrl} />}
    </div>
  );
};

export default App;

