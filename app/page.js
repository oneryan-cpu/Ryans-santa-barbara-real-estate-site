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
          { name: 'The Riviera', image: '/neighborhood1.jpg', description: 'Elevated homes with stunning ocean views.', url: 'https://villagesite.com/communities/riviera' },
          { name: 'The Mesa', image: '/neighborhood2.jpg', description: 'Quiet neighborhoods close to the beach and city.', url: 'https://villagesite.com/communities/mesa' },
          { name: 'Samarkand', image: '/placeholder1.jpg', description: 'Family-friendly streets with historic charm.', url: 'https://villagesite.com/communities/samarkand' },
          { name: 'San Roque', image: '/placeholder2.jpg', description: 'Traditional Santa Barbara homes with mature landscaping.', url: 'https://villagesite.com/communities/san-roque' },
          { name: 'Hope Ranch', image: '/placeholder3.jpg', description: 'Gated estates with equestrian facilities.', url: 'https://villagesite.com/communities/hope-ranch' },
          { name: 'Montecito', image: '/neighborhood1.jpg', description: 'Exclusive community with luxury estates.', url: 'https://villagesite.com/communities/montecito' },
          { name: 'Carpinteria', image: '/neighborhood2.jpg', description: 'Charming coastal town with relaxed lifestyle.', url: 'https://villagesite.com/communities/carpinteria' },
          { name: 'Mission Canyon', image: '/placeholder1.jpg', description: 'Hillside homes with scenic views.', url: 'https://villagesite.com/communities/mission-canyon' },
          { name: 'Westside', image: '/placeholder2.jpg', description: 'Central neighborhood close to shops and dining.', url: 'https://villagesite.com/communities/westside' },
          { name: 'Goleta', image: '/placeholder3.jpg', description: 'Family-friendly area with good schools.', url: 'https://villagesite.com/communities/goleta' },
        ]}
      />

      <Schools 
        schools={[
          { name: 'Santa Barbara High School', image: '/school1.jpg', url: 'https://www.sbhs.net/', description: 'Comprehensive public high school offering academics, athletics, and arts programs.' },
          { name: 'Dos Pueblos High School', image: '/school2.jpg', url: 'https://dphs.sbunified.org/', description: 'Public high school in Goleta with strong programs in STEM and performing arts.' },
          { name: 'Carpinteria High School', image: '/school3.jpg', url: 'https://chs.sbunified.org/', description: 'Local high school serving Carpinteria, known for its community-focused approach.' },
        ]}
      />

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
