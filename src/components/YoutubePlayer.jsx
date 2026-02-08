import YouTube from "react-youtube";

function YoutubePlayer() {
  const opts = {
    height: "315",
    width: "560",
    playerVars: {
      autoplay: 1,
      origin: window.location.origin,
    },
  };

  const onReady = (event) => {
    event.target.playVideo();
  };

  return <YouTube videoId="xEGO8AGmWJQ" opts={opts} onReady={onReady} />;
}

export default YoutubePlayer;
