import React from "react";
import YouTube from "react-youtube";

function Example() {
  const videoOnReady = (event) => {
    console.log("Video is ready");
  };

  const videoOnPlay = (event) => {
    console.log("Video is playing");
  };

  const videoOnPause = (event) => {
    console.log("Video is paused");
  };

  const videoOnEnd = (event) => {
    console.log("Video has ended");
  };

  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <YouTube
      videoId="dQw4w9WgXcQ"
      opts={opts}
      onReady={videoOnReady}
      onPlay={videoOnPlay}
      onPause={videoOnPause}
      onEnd={videoOnEnd}
    />
  );
}

export default Example;
