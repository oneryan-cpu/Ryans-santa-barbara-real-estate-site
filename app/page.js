'use client';

import React from 'react';
import Navbar from './components/Navbar';                 // <-- corrected path
import HeroSection from './components/HeroSection';       // <-- corrected path
import FeaturedProperties from './components/FeaturedProperties'; // <-- corrected path
import Neighborhoods from './neighborhoods';
import Schools from './schools';

export default function Page() {
  return (
    <>
      <Navbar />

      <HeroSection 
        images={[
          '/Heroimage1.jpg',
          '/Heroimage2.jpg',
          '/Heroimage3.jpg',
          '/Heroimage4.jpg',
          '/Heroimage5.jpg',
          '/Heroimage6.jpg'
        ]}
        title="Ryan Kell - Santa Barbara Real Estate"
        subtitle="Explore neighborhoods, properties, and listings in Santa Barbara."
      />

      <FeaturedProperties 
        properties={[
          { title: 'Property 1', description: 'Beautiful 4-bedroom home in Montecito.', image: '/placeholder1.jpg' },
          { title: 'Property 2', description: 'Stunning ocean-view estate.', image: '/placeholder2.jpg' },
          { title: 'Property 3', description: 'Modern home in Carpinteria.', image: '/placeholder3.jpg' },
        ]}
      />

      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold mb-6">Neighborhoods</h2>
        <Neighborhoods />
      </section>

      <section className="py-12 px-6">
        <h2 className="text-2xl font-bold mb-6">Schools</h2>
        <Schools />
      </section>

      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem' }}>
        <h2>Contact</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input type="text" placeholder="Name" required style={{ padding: '0.5rem', borderRadius: 4, border: '1px solid #ccc' }} />
          <input type="email" placeholder="Email" required style={{ padding: '0.5rem', borderRadius: 4, border: '1px solid #ccc' }} />
          <textarea placeholder="Message" required style={{ padding: '0.5rem', borderRadius: 4, border: '1px solid #ccc' }} />
          <button type="submit" style={{ padding: '0.75rem', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' }}>Send Message</button>
        </form>
      </section>
    </>
  );
}
