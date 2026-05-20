"use client";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [pct, setPct] = useState(0);
  const [fading, setFading] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const resources = [
      ...Array.from(document.images),
      ...Array.from(document.getElementsByTagName("video")),
    ] as (HTMLImageElement | HTMLVideoElement)[];

    const total = resources.length;
    if (total === 0) { setHidden(true); return; }

    let loaded = 0;
    let done = false;

    const finish = () => {
      if (done) return;
      done = true;
      setFading(true);
      setTimeout(() => setHidden(true), 500);
    };

    const onLoad = () => {
      loaded++;
      setPct(Math.round((loaded / total) * 100));
      if (loaded >= total) finish();
    };

    resources.forEach((r) => {
      const img = r as HTMLImageElement;
      const vid = r as HTMLVideoElement;
      if ((r.tagName === "IMG" && img.complete) || (r.tagName === "VIDEO" && vid.readyState >= 4)) {
        onLoad();
      } else {
        r.addEventListener("load", onLoad, { once: true });
        r.addEventListener("canplaythrough", onLoad, { once: true });
        r.addEventListener("error", onLoad, { once: true });
      }
    });

    const fallback = setTimeout(finish, 5000);
    return () => clearTimeout(fallback);
  }, []);

  if (hidden) return null;

  return (
    <div
      className="font-terminal"
      style={{
        position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
        background: "black", display: "flex", justifyContent: "center", alignItems: "center",
        zIndex: 1000, opacity: fading ? 0 : 1, transition: "opacity 0.5s ease",
      }}
    >
      <p style={{ color: "#CCD4E3", fontSize: "2em" }}>Loading {pct}%</p>
    </div>
  );
}
