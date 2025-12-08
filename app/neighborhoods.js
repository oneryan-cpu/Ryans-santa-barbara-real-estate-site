'use client';

import NeighborhoodCard from '../../components/NeighborhoodCard';

// Deployment-safe placeholder images
// You can replace these with your real images later
const neighborhoods = [
  { name: "Montecito", image: "/placeholder1.jpg", description: "Luxury estates, ocean views, private living." },
  { name: "Riviera", image: "/placeholder2.jpg", description: "Classic homes with stunning views over the city and harbor." },
  { name: "Mesa", image: "/placeholder3.jpg", description: "Beachside community with laid-back vibes and coastal sunset views." },
  { name: "Hope Ranch", image: "/placeholder1.jpg", description: "Prestigious estates, private beach access, and equestrian amenities." },
  { name: "Summerland", image: "/placeholder2.jpg", description: "Charming beach town with boutiques, cafes, and ocean views." },
  { name: "Carpinteria", image: "/placeholder3.jpg", description: "Seaside community known for its gentle beaches and small-town charm." },
  { name: "San Roque", image: "/placeholder1.jpg", description: "Family-friendly neighborhood with tree-lined streets and great schools." },
  { name: "Mission Canyon", image: "/placeholder2.jpg", description: "Nature-oriented living near the Mission and Botanic Garden." },
  { name: "Downtown Santa Barbara", image: "/placeholder3.jpg", description: "Walkable urban lifestyle with restaurants, theaters, and shops." },
  { name: "Goleta", image: "/placeholder1.jpg", description: "Suburban comfort near UCSB, tech companies, and beaches." },
  { name: "Santa Ynez Valley", image: "/placeholder2.jpg", description: "Vineyards, ranches, and open country living." },
];

export default function NeighborhoodsPage() {
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
