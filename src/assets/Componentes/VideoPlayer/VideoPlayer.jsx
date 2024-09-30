import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = () => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
    },
  };

  const onReady = (event) => {
    event.target.pauseVideo();
  };

  return (
    <div>
      <YouTube videoId="dQw4w9WgXcQ" opts={opts} onReady={onReady} />
    </div>
  );
};

export default VideoPlayer;
