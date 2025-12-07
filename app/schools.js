'use client';
import SchoolCard from '../components/SchoolCard';

export default function Schools({ schools }) {
  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem' }}>
      <h2>Schools</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        {schools.map((s) => (
          <SchoolCard 
            key={s.name} 
            name={s.name} 
            image={s.image} 
            description={s.description} 
            url={s.url} 
          />
        ))}
      </div>
    </section>
  );
}
