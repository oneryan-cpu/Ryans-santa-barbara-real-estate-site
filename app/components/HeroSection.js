'use client';
import React, { useState, useEffect } from 'react';

export default function HeroSection({ images, title, subtitle }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section style={{ position: 'relative', height: '400px', overflow: 'hidden' }}>
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`Hero ${index}`}
          style={{
            width: '100%',
            height: '400px',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            opacity: index === current ? 1 : 0,
            transition: 'opacity 1s ease-in-out'
          }}
        />
      ))}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#fff',
        textAlign: 'center',
        textShadow: '0 2px 8px rgba(0,0,0,0.6)'
      }}>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}
