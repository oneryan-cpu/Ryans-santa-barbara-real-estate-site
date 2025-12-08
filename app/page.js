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

      <Neighborhoods 
        neighborhoods={[
          { name: 'Riviera', image: '/neighborhoods/riviera.jpg', description: 'Elevated homes with stunning ocean views.' },
          { name: 'The Mesa', image: '/neighborhoods/mesa.jpg', description: 'Quiet neighborhoods close to the beach and city.' },
          { name: 'Samarkand', image: '/neighborhoods/samarkand.jpg', description: 'Family-friendly streets with historic charm.' },
          { name: 'San Roque', image: '/neighborhoods/sanroque.jpg', description: 'Traditional Santa Barbara homes with mature landscaping.' },
          { name: 'Hope Ranch', image: '/neighborhoods/hoperanch.jpg', description: 'Gated estates with equestrian facilities.' },
          { name: 'Montecito', image: '/neighborhoods/montecito.jpg', description: 'Exclusive community with luxury estates.' },
          { name: 'Carpinteria', image: '/neighborhoods/carpinteria.jpg', description: 'Charming coastal town with relaxed lifestyle.' },
          { name: 'Mission Canyon', image: '/neighborhoods/missioncanyon.jpg', description: 'Hillside homes with scenic views.' },
          { name: 'Westside', image: '/neighborhoods/westside.jpg', description: 'Central neighborhood close to shops and dining.' },
          { name: 'Goleta', image: '/neighborhoods/goleta.jpg', description: 'Family-friendly area with good schools.' },
        ]}
      />

      <Schools 
        schools={[
          { name: 'La Colina Elementary', image: '/schools/lacolina.jpg', url: 'https://lacolina.sbunified.org/' },
          { name: 'La Cumbre Elementary', image: '/schools/lacumbre.jpg', url: 'https://lacumbre.sbunified.org/' },
          { name: 'Goleta Valley Junior High', image: '/schools/gvjhs.jpg', url: 'https://gvjh.sbunified.org/' },
          { name: 'Santa Barbara Middle School', image: '/schools/sbms.jpg', url: 'https://www.sbms.org/' },
          { name: 'Adams Elementary', image: '/schools/adams.jpg', url: 'https://adams.sbunified.org/' },
          { name: 'Monroe Elementary', image: '/schools/monroe.jpg', url: 'https://monroe.sbunified.org/' },
          { name: 'Roosevelt Elementary', image: '/schools/roosevelt.jpg', url: 'https://roosevelt.sbunified.org/' },
          { name: 'Peabody Charter School', image: '/schools/peabody.jpg', url: 'https://www.peabodycharter.org/' },
          { name: 'Washington Elementary', image: '/schools/washington.jpg', url: 'https://washington.sbunified.org/' },
          { name: 'Cleveland Elementary', image: '/schools/cleveland.jpg', url: 'https://cleveland.sbunified.org/' },
          { name: 'Harding Elementary', image: '/schools/harding.jpg', url: 'https://harding.sbunified.org/' },
          { name: 'Franklin Elementary', image: '/schools/franklin.jpg', url: 'https://franklin.sbunified.org/' },
          { name: 'McKinley Elementary', image: '/schools/mckinley.jpg', url: 'https://mckinley.sbunified.org/' },
          { name: 'Cold Spring School', image: '/schools/coldspring.jpg', url: 'https://www.coldspringschool.net/' },
          { name: 'Mount Carmel School', image: '/schools/mountcarmel.jpg', url: 'https://mountcarmelschool.net/' },
          { name: 'Carpinteria Middle School', image: '/schools/cms.jpg', url: 'https://cms.cusd.net/' },
          { name: 'Aliso Elementary', image: '/schools/aliso.jpg', url: 'https://aliso.cusd.net/' },
          { name: 'Canalino Elementary', image: '/schools/canalino.jpg', url: 'https://canalino.cusd.net/' },
          { name: 'Summerland School', image: '/schools/summerland.jpg', url: 'https://summerland.cusd.net/' },
          { name: 'The Howard School', image: '/schools/howard.jpg', url: 'https://www.thehowardschool.org/' },
          { name: 'Cate School', image: '/schools/cate.jpg', url: 'https://www.cate.org/' },
          { name: 'Pacifica Graduate Institute', image: '/schools/pacifica.jpg', url: 'https://www.pacifica.edu/' },
          { name: 'Westmont College', image: '/schools/westmont.jpg', url: 'https://www.westmont.edu/' },
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
