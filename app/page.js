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
      
      <section style={{
        padding: '6rem 2rem',
        backgroundImage: `url(${heroImages[currentImage]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: '#fff',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        minHeight: '70vh',
        transition: 'background-image 1s ease-in-out'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textShadow: '2px 2px 5px rgba(0,0,0,0.7)' }}>
          Ryan Kell - Santa Barbara Real Estate
        </h1>
        <p style={{
          fontSize: '1.3rem',
          maxWidth: '700px',
          margin: '0 auto 2rem',
          textShadow: '1px 1px 3px rgba(0,0,0,0.7)'
        }}>
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
      </section>
    </main>
  );
}
