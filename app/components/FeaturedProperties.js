'use client';
import React from 'react';

export default function FeaturedProperties({ properties }) {
  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem' }}>
      <h2>Featured Properties</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {properties.map((prop) => (
          <div key={prop.title} style={{ flex: '1 0 30%', border: '1px solid #eee', borderRadius: 8, overflow: 'hidden' }}>
            <img src={prop.image} alt={prop.title} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
            <div style={{ padding: '0.5rem' }}>
              <h3>{prop.title}</h3>
              <p style={{ fontSize: '0.9rem', lineHeight: '1.3rem' }}>{prop.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
