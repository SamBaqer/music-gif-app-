import React, { useEffect, useState } from "react";
import { useAudioPlayer } from "react-use-audio-player";

export default function AudioPlayer({ src, title }) {
  const { load, playing, togglePlayPause, getPosition, duration, seek } =
    useAudioPlayer();
  const [position, setPosition] = useState(0);

  // Load the audio when component mounts or when src changes
  useEffect(() => {
    if (src) {
      load(src, {
        autoplay: false,
        format: ["mp3"],
      });
    }
  }, [src, load]);

  // Update slider position
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(getPosition());
    }, 500);
    return () => clearInterval(interval);
  }, [getPosition]);

  const formatTime = (time) => {
    if (!time) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  return (
    <div
      style={{ maxWidth: "400px", margin: "20px auto", textAlign: "center" }}
    >
      <h4>{title}</h4>
      <button onClick={togglePlayPause} style={{ marginBottom: "10px" }}>
        {playing ? "⏸ Pause" : "▶ Play"}
      </button>

      <input
        type="range"
        min={0}
        max={duration || 0}
        value={position}
        onChange={(e) => seek(parseFloat(e.target.value))}
        style={{ width: "100%" }}
      />

      <div style={{ marginTop: "5px" }}>
        {formatTime(position)} / {formatTime(duration)}
      </div>
    </div>
  );
}
