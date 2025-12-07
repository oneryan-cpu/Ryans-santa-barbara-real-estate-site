"use client";

export default function HeroSection({ currentImage }) {
  return (
    <section
      style={{
        width: "100%",
        height: "80vh",
        backgroundImage: `url(${currentImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        transition: "background-image 1s ease-in-out",
      }}
    />
  );
}

