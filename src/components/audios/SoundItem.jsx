// src/components/Sounds/SoundItem.jsx
import AudioPlayer from "./AudioPlayer";
import { AudioPlayerProvider } from "react-use-audio-player";

export default function SoundItem({ sound }) {
  return (
    <AudioPlayerProvider>
      <div style={{ marginBottom: "1rem" }}>
        <h3>{sound.title}</h3>

        <AudioPlayer src={sound.src} />
      </div>
    </AudioPlayerProvider>
  );
}
