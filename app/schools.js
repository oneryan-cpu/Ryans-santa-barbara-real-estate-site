'use client';
import React from 'react';

const schools = [
  {
    name: "Montecito Union School",
    image: "/school1.jpg",
    description: "A highly regarded public elementary school serving Montecito and surrounding neighborhoods, known for its strong academic programs and community involvement."
  },
  {
    name: "Santa Barbara High School",
    image: "/school2.jpg",
    description: "A historic high school offering diverse academic and extracurricular opportunities, with a focus on college preparation and community engagement."
  },
  {
    name: "Carpinteria Middle School",
    image: "/school3.jpg",
    description: "Serving the Carpinteria community, this school emphasizes student growth, arts, and athletics, fostering a supportive and inclusive environment."
  }
  // Add more schools here as needed
];

export default function Schools() {
  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem' }}>
      <h2>Schools</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {schools.map((s) => (
          <div key={s.name} style={{ flex: '1 0 30%', border: '1px solid #eee', borderRadius: 8, overflow: 'hidden' }}>
            <img src={s.image} alt={s.name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
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
