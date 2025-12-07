'use client';
import React from 'react';

export default function SchoolCard({ name, image, description, url }) {
  return (
    <div style={{ flex: '1 0 30%', border: '1px solid #eee', borderRadius: 8, overflow: 'hidden', marginBottom: '1rem' }}>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={name} style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
      </a>
      <div style={{ padding: '0.5rem' }}>
        <h3>{name}</h3>
        <p style={{ fontSize: '0.9rem', lineHeight: '1.3rem' }}>{description}</p>
      </div>
    </div>
  );
}
