"use client";

import { useState, useEffect } from 'react';

export default function Page() {
  const heroImages = [
    '/hero1.jpg',
    '/hero2.jpg',
    '/hero3.jpg',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); // rotate every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <main style={{ fontFamily: 'sans-serif', lineHeight: '1.6', color: '#1a1a1a' }}>
      
      {/* Hero Section with fade */}
      <section style={{
        position: 'relative',
        height: '70vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        {heroImages.map((image, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: currentImage === index ? 1 : 0,
              transition: 'opacity 1.5s ease-in-out',
            }}
          />
        ))}

        {/* Overlay text */}
        <div style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          color: '#fff',
          textShadow: '2px 2px 8px rgba(0,0,0,0.8)',
          padding: '0 2rem'
        }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
            Ryan Kell - Santa Barbara Real Estate
          </h1>
          <p style={{ fontSize: '1.3rem', maxWidth: '700px', margin: '0 auto 2rem' }}>
            Helping you find your dream home in Santa Barbara, Carpinteria, Montecito, and Goleta.
          </p>
          <a 
            href="#listings"
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#0070f3',
              color: '#fff',
              borderRadius: '5px',
              textDecoration: 'none',
              fontWeight: 'bold'
            }}
          >
            View Listings
          </a>
        </div>
      </section>
    </main>
  );
}
