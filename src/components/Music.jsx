import React from "react";
import music from "../assets/chinese-new-year.mp3";
import { useRef } from "react";
const Music = () => {
  const audioRef = useRef(null); // Reference to the audio element
  const handlePlayPause = () => {
    if (audioRef.current.paused) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };
  return (
    <>
      <audio
        ref={audioRef}
        src={music}
        loop
        className="container fixed bottom-4 right-4 p-2 rounded-full z-[1000]"
      />
      <button onClick={handlePlayPause}></button>
    </>
  );
};

export default Music;
