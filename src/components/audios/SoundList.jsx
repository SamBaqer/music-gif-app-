// src/components/Sounds/SoundsList.jsx
import sounds from "../../data/soundsData";
import SoundItem from "./SoundItem";

export default function SoundsList() {
  return (
    <div>
      {sounds.map((sound) => (
        <SoundItem key={sound.id} sound={sound} />
      ))}
    </div>
  );
}
