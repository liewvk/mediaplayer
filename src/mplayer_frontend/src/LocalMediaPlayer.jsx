// src/mplayer_frontend/src/LocalMediaPlayer.jsx
import React, { useEffect, useState } from 'react';
import { createActor } from "../../declarations/backend"; // Correct path to backend declarations

const LocalMediaPlayer = () => {
  const [videoList, setVideoList] = useState([]);
  const [audioList, setAudioList] = useState([]);

  useEffect(() => {
    // Replace with your actual backend canister ID
    const backendCanisterId = "bkyz2-fmaaa-aaaaa-qaaaq-cai"; // Example ID

    const actor = createActor(backendCanisterId, {
      agentOptions: {
        host: "http://127.0.0.1:8000" // Local replica
      }
    });

    actor.getVideos().then((videos) => setVideoList(videos));
    actor.getAudios().then((audios) => setAudioList(audios));
  }, []);

  return (
    <div className="local-media-player">
      <h2>Local Videos</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {videoList.map((video, idx) => (
          <video
            key={idx}
            controls
            width="320"
            height="180"
            src={`http://127.0.0.1:8000/?canisterId=bd3sg-teaaa-aaaaa-qaaba-cai&asset=${video}`}
          >
            Your browser does not support the video tag.
          </video>
        ))}
      </div>

      <h2>Local Audio</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {audioList.map((audio, idx) => (
          <audio
            key={idx}
            controls
            src={`http://127.0.0.1:8000/?canisterId=bd3sg-teaaa-aaaaa-qaaba-cai&asset=${audio}`}
          >
            Your browser does not support the audio element.
          </audio>
        ))}
      </div>
    </div>
  );
};

export default LocalMediaPlayer;