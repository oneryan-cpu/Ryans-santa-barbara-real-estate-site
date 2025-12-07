"use client";

import { useState, useEffect } from "react";
import HeroSection from './components/HeroSection';
import FeaturedProperties from './components/FeaturedProperties';

export default function Page() {
  // List of hero images in /public
  const heroImages = [
    "/hero1.jpg",
    "/hero2.jpg",
    "/hero3.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((i) => (i + 1) % heroImages.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <main>
      <HeroSection currentImage={heroImages[currentIndex]} />
      <FeaturedProperties />
    </main>
  );
}
