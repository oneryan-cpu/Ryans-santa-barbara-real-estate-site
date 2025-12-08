'use client';

import NeighborhoodCard from './components/NeighborhoodCard';

const neighborhoods = [
  { name: "Montecito", image: "/neighborhoods/montecito.jpg", description: "Exclusive community with prestigious estates and ocean views." },
  { name: "Riviera", image: "/neighborhoods/riviera.jpg", description: "Classic homes with stunning views over the city and harbor." },
  { name: "Mesa", image: "/neighborhoods/mesa.jpg", description: "Beachside community with laid-back vibes and coastal sunset views." },
  { name: "Hope Ranch", image: "/neighborhoods/hope-ranch.jpg", description: "Prestigious estates with private beach access and equestrian amenities." },
  { name: "Summerland", image: "/neighborhoods/summerland.jpg", description: "Charming beach town with boutiques, cafes, and ocean views." },
  { name: "Carpinteria", image: "/neighborhoods/carpinteria.jpg", description: "Seaside community known for its gentle beaches and small-town charm." },
  { name: "San Roque", image: "/neighborhoods/san-roque.jpg", description: "Family-friendly neighborhood with tree-lined streets and great schools." },
  { name: "Mission Canyon", image: "/neighborhoods/mission-canyon.jpg", description: "Nature-oriented living near the Mission and Botanic Garden." },
  { name: "Downtown Santa Barbara", image: "/neighborhoods/downtown.jpg", description: "Walkable urban lifestyle with restaurants, theaters, and shops." },
  { name: "Goleta", image: "/neighborhoods/goleta.jpg", description: "Suburban comfort near UCSB, tech companies, and beaches." },
  { name: "Santa Ynez Valley", image: "/neighborhoods/santa-ynez.jpg", description: "Vineyards, ranches, and open country living." },
];

export default function Neighborhoods() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {neighborhoods.map((n) => (
        <NeighborhoodCard
          key={n.name}
          name={n.name}
          description={n.description}
          image={n.image}
        />
      ))}
    </div>
  );
}
