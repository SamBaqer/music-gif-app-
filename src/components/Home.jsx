import GifsList from "../components/gifs/GifsList";
import SoundList from "../components/audios/SoundList";

export default function Home() {
  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <GifsList />
      <h2 style={{ marginTop: "40px" }}>Sound Library</h2>
      <SoundList />
    </div>
  );
}
