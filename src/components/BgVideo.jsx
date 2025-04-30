import React from "react";

export default function BgVideo() {
  return (
    <video autoPlay muted loop playsInline className="video-bg">
      <source src="/videos/homepage.webm" type="video/webm" />
      Your browser does not support the video tag.
    </video>
  );
}
