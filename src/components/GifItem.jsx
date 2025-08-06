// src/components/GifItem.jsx
import { useRef, useState, useEffect } from "react";
import { CiMinimize1 } from "react-icons/ci";

export default function GifItem({ src }) {
  const containerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const openFullscreen = () => {
    const elem = containerRef.current;
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      const isFull =
        document.fullscreenElement === containerRef.current ||
        document.webkitFullscreenElement === containerRef.current ||
        document.msFullscreenElement === containerRef.current;

      setIsFullscreen(isFull);
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange);
    document.addEventListener("MSFullscreenChange", handleFullscreenChange);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener(
        "webkitfullscreenchange",
        handleFullscreenChange
      );
      document.removeEventListener(
        "MSFullscreenChange",
        handleFullscreenChange
      );
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: isFullscreen ? "relative" : "static",
        width: isFullscreen ? "100vw" : "200px",
        height: isFullscreen ? "100vh" : "200px",
        margin: isFullscreen ? "0" : "10px",
        display: "inline-block",
        overflow: "hidden",
        cursor: "pointer",
      }}
    >
      <img
        src={src}
        alt="gif"
        onClick={openFullscreen}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderRadius: isFullscreen ? "0" : "12px",
          display: "block",
        }}
      />

      {isFullscreen && (
        <button
          onClick={closeFullscreen}
          style={{
            position: "absolute",
            bottom: "30px",
            right: "30px",

            background: "#00000080",
            border: "none",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 9999,
          }}
        >
          <CiMinimize1 size={28} color="#ffffff" />
        </button>
      )}
    </div>
  );
}
