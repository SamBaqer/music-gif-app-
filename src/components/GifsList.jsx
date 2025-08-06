import GifItem from "./GifItem";
import gifList from "../data";

export default function GifsList() {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {gifList.map((gif, index) => (
        <GifItem key={index} src={gif} />
      ))}
    </div>
  );
}
