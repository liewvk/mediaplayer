import React, { useEffect, useState } from 'react';

const SpotifyPlayer = ({ token }) => {
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    if (!token) return;

    const script = document.createElement("script");
    script.src = "https://sdk.scdn.co/spotify-player.js";
    script.async = true;

    document.body.appendChild(script);

    window.onSpotifyWebPlaybackSDKReady = () => {
      const newPlayer = new window.Spotify.Player({
        name: "My ICP Media Player",
        getOAuthToken: cb => { cb(token); },
        volume: 0.5
      });

      newPlayer.addListener('ready', ({ device_id }) => {
        console.log('Ready with Device ID', device_id);
      });

      newPlayer.addListener('not_ready', ({ device_id }) => {
        console.log('Device ID has gone offline', device_id);
      });

      newPlayer.connect();
      setPlayer(newPlayer);
    };
  }, [token]);

  // To play a track:
  // fetch(`https://api.spotify.com/v1/me/player/play?device_id=${deviceId}`, {
  //   method: "PUT",
  //   body: JSON.stringify({ uris: ["spotify:track:TRACK_ID"] }),
  //   headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
  // })

  return <div>Spotify Player (once connected, control via API calls)</div>;
};

export default SpotifyPlayer;
