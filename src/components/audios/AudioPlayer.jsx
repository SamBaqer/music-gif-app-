// src/components/AudioPlayer/AudioPlayer.jsx
import { useAudioPlayer } from "react-use-audio-player";

export default function AudioPlayer({ src }) {
  const { load, play, pause, playing } = useAudioPlayer();

  const handlePlay = () => {
    load(src, { autoplay: true });
  };

  return (
    <div>
      <button onClick={handlePlay}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
}
