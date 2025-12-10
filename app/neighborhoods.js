'use client';

import NeighborhoodCard from './components/NeighborhoodCard'; // correct relative path

const neighborhoods = [
  { name: "Montecito", image: "/placeholder1.jpg", description: "Exclusive community with prestigious estates and ocean views." },
  { name: "Riviera", image: "/placeholder2.jpg", description: "Classic homes with stunning views over the city and harbor." },
  { name: "Mesa", image: "/placeholder3.jpg", description: "Beachside community with laid-back vibes and coastal sunset views." },
  { name: "Hope Ranch", image: "/placeholder1.jpg", description: "Prestigious estates with private beach access and equestrian amenities." },
  { name: "Summerland", image: "/placeholder2.jpg", description: "Charming beach town with boutiques, cafes, and ocean views." },
  { name: "Carpinteria", image: "/placeholder3.jpg", description: "Seaside community known for its gentle beaches and small-town charm." },
  { name: "San Roque", image: "/placeholder1.jpg", description: "Family-friendly neighborhood with tree-lined streets and great schools." },
  { name: "Mission Canyon", image: "/placeholder2.jpg", description: "Nature-oriented living near the Mission and Botanic Garden." },
  { name: "Downtown Santa Barbara", image: "/placeholder3.jpg", description: "Walkable urban lifestyle with restaurants, theaters, and shops." },
  { name: "Goleta", image: "/placeholder1.jpg", description: "Suburban comfort near UCSB, tech companies, and beaches." },
  { name: "Santa Ynez Valley", image: "/placeholder2.jpg", description: "Vineyards, ranches, and open country living." },
];

export default function Neighborhoods() {
  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1.5rem'
      }}>
        {neighborhoods.map((n) => (
          <NeighborhoodCard key={n.name} name={n.name} description={n.description} image={n.image} />
        ))}
      </div>
    </section>
  );
}
