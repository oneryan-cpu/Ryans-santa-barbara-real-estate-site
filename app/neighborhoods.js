'use client';

import React, { useState, useMemo } from 'react';
import NeighborhoodCard from '../components/NeighborhoodCard';
import { motion } from 'framer-motion';

/**
 * Neighborhoods component
 * - Filters by area (All / Montecito / Santa Barbara / Carpinteria)
 * - Uses NeighborhoodCard for each item (image, name, description, url)
 * - Images are hotlinked to Village Properties for now (replace with /public/ files later)
 */

const NEIGHBORHOODS = [
  {
    name: 'Riviera',
    image: 'https://villagesite.com/communities/riviera/image.jpg',
    url: 'https://villagesite.com/communities/riviera',
    area: 'Santa Barbara',
    description: 'The Riviera crowns Santa Barbara’s hillsides with sweeping vistas and a storied sense of place.'
  },
  {
    name: 'The Mesa',
    image: 'https://villagesite.com/communities/mesa/image.jpg',
    url: 'https://villagesite.com/communities/mesa',
    area: 'Santa Barbara',
    description: 'Coastal neighborhood balancing beach access with relaxed residential comfort.'
  },
  {
    name: 'Samarkand',
    image: 'https://villagesite.com/communities/samarkand/image.jpg',
    url: 'https://villagesite.com/communities/samarkand',
    area: 'Santa Barbara',
    description: 'Quiet, tree-lined streets and charming historic homes just across State Street.'
  },
  {
    name: 'San Roque',
    image: 'https://villagesite.com/communities/san-roque/image.jpg',
    url: 'https://villagesite.com/communities/san-roque',
    area: 'Santa Barbara',
    description: 'A family-friendly neighborhood with mature landscaping and a strong community feel.'
  },
  {
    name: 'Upper East',
    image: 'https://villagesite.com/communities/upper-east/image.jpg',
    url: 'https://villagesite.com/communities/upper-east',
    area: 'Santa Barbara',
    description: 'Close to downtown conveniences while remaining a peaceful, refined residential area.'
  },
  {
    name: 'Hope Ranch',
    image: 'https://villagesite.com/communities/hope-ranch/image.jpg',
    url: 'https://villagesite.com/communities/hope-ranch',
    area: 'Santa Barbara',
    description: 'Rolling coastal hills and estate properties — private, serene, and elegantly understated.'
  },
  {
    name: 'Montecito',
    image: 'https://villagesite.com/communities/montecito/image.jpg',
    url: 'https://villagesite.com/communities/montecito',
    area: 'Montecito',
    description: 'An enclave of refined homes, celebrated for privacy, architecture, and scenic beauty.'
  },
  {
    name: 'Mission Canyon',
    image: 'https://villagesite.com/communities/mission-canyon/image.jpg',
    url: 'https://villagesite.com/communities/mission-canyon',
    area: 'Santa Barbara',
    description: 'Hillside living surrounded by oak woodlands with calming canyon trails.'
  },
  {
    name: 'Westside',
    image: 'https://villagesite.com/communities/westside/image.jpg',
    url: 'https://villagesite.com/communities/westside',
    area: 'Santa Barbara',
    description: 'Historic streets, local shops, and proximity to the pier and downtown culture.'
  },
  {
    name: 'Carpinteria',
    image: 'https://villagesite.com/communities/carpinteria/image.jpg',
    url: 'https://villagesite.com/communities/carpinteria',
    area: 'Carpinteria',
    description: 'Small-town coastal charm, excellent beaches and a relaxed seaside pace.'
  },
  {
    name: 'Goleta',
    image: 'https://villagesite.com/communities/goleta/image.jpg',
    url: 'https://villagesite.com/communities/goleta',
    area: 'Goleta',
    description: 'Suburban coastal community with parks, beaches and easy access to UCSB and the airport.'
  }
];

const FILTERS = ['All', 'Montecito', 'Santa Barbara', 'Carpinteria', 'Goleta'];

export default function Neighborhoods() {
  const [active, setActive] = useState('All');

  const filtered = useMemo(() => {
    if (active === 'All') return NEIGHBORHOODS;
    return NEIGHBORHOODS.filter((n) => n.area === active);
  }, [active]);

  return (
    <section style={{ maxWidth: 1200, margin: '0 auto', padding: '2.5rem 1rem' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '0.75rem', textAlign: 'center' }}>Neighborhoods</h2>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '1.5rem' }}>
        Explore the distinct neighborhoods across Santa Barbara, Montecito, Carpinteria and Goleta.
      </p>

      {/* filter buttons */}
      <div style={{ display: 'flex', gap: 10, justifyContent: 'center', marginBottom: 24, flexWrap: 'wrap' }}>
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            style={{
              padding: '0.5rem 0.9rem',
              borderRadius: 999,
              border: active === f ? '1px solid #222' : '1px solid #ddd',
              background: active === f ? '#111' : '#fff',
              color: active === f ? '#fff' : '#111',
              cursor: 'pointer'
            }}
          >
            {f}
          </button>
        ))}
      </div>

      {/* grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
        {filtered.map((n) => (
          <motion.div key={n.name} whileHover={{ y: -6 }} transition={{ type: 'spring', stiffness: 200 }}>
            <NeighborhoodCard {...n} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
