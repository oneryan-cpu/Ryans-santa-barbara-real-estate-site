'use client';

export default function NeighborhoodCard({ name, description, image }) {
  return (
    <div style={{
      border: '1px solid #eee',
      borderRadius: 8,
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      backgroundColor: '#fff'
    }}>
      <img src={image} alt={name} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
      <div style={{ padding: '1rem' }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>{name}</h3>
        <p style={{ fontSize: '1rem', color: '#555' }}>{description}</p>
      </div>
    </div>
  );
}
