// src/components/Sounds/SoundItem.jsx
import AudioPlayer from "./AudioPlayer";

export default function SoundItem({ sound }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <h3>{sound.title}</h3>
      <AudioPlayer src={sound.src} />
    </div>
  );
}
