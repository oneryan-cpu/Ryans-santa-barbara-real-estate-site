'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedProperties from '../components/FeaturedProperties';
import Neighborhoods from './neighborhoods';
import Schools from './schools';

export default function Page() {
  return (
    <>
      <Navbar />
      <HeroSection 
        images={[
          '/neighborhood1.jpg',
          '/neighborhood2.jpg',
          '/placeholder1.jpg'
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
      <Neighborhoods 
        neighborhoods={[
          { name: 'The Riviera', image: '/neighborhood1.jpg', description: 'Elevated homes with stunning ocean views.' },
          { name: 'The Mesa', image: '/neighborhood2.jpg', description: 'Quiet neighborhoods close to the beach and city.' },
          { name: 'Samarkand', image: '/placeholder1.jpg', description: 'Family-friendly streets with historic charm.' },
          { name: 'San Roque', image: '/placeholder2.jpg', description: 'Traditional Santa Barbara homes with mature landscaping.' },
          { name: 'Hope Ranch', image: '/placeholder3.jpg', description: 'Gated estates with equestrian facilities.' },
          { name: 'Montecito', image: '/neighborhood1.jpg', description: 'Exclusive community with luxury estates.' },
          { name: 'Carpinteria', image: '/neighborhood2.jpg', description: 'Charming coastal town with relaxed lifestyle.' },
          { name: 'Mission Canyon', image: '/placeholder1.jpg', description: 'Hillside homes with scenic views.' },
          { name: 'Westside', image: '/placeholder2.jpg', description: 'Central neighborhood close to shops and dining.' },
          { name: 'Goleta', image: '/placeholder3.jpg', description: 'Family-friendly area with good schools.' },
        ]}
      />
      <Schools />
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
