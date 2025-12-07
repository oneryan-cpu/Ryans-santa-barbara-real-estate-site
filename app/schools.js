'use client';
import React from 'react';

const schools = [
  {
    name: 'Santa Barbara High School',
    image: '/school1.jpg',
    url: 'https://www.sbhs.net/',
    description: 'Comprehensive public high school offering academics, athletics, and arts programs.'
  },
  {
    name: 'Dos Pueblos High School',
    image: '/school2.jpg',
    url: 'https://dphs.sbunified.org/',
    description: 'Public high school in Goleta with strong programs in STEM and performing arts.'
  },
  {
    name: 'Carpinteria High School',
    image: '/school3.jpg',
    url: 'https://chs.sbunified.org/',
    description: 'Local high school serving Carpinteria, known for its community-focused approach.'
  }
];

export default function Schools() {
  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem' }}>
      <h2>Schools</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {schools.map((s) => (
          <div key={s.name} style={{ flex: '1 0 30%', border: '1px solid #eee', borderRadius: 8, overflow: 'hidden' }}>
            <a href={s.url} target="_blank" rel="noopener noreferrer">
              <img src={s.image} alt={s.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            </a>
            <div style={{ padding: '0.5rem' }}>
              <h3>{s.name}</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.3rem' }}>{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
