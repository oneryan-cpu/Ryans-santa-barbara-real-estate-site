'use client';

import React, { useState } from 'react';
import SchoolCard from './components/SchoolCard'; // correct relative path

export default function Schools() {
  // placeholder images used — you already have placeholders
  const schools = [
    { name: 'La Colina School', image: '/placeholder1.jpg', url: 'https://lacolina.sbunified.org/', category: 'Elementary' },
    { name: 'La Cumbre Junior High', image: '/placeholder2.jpg', url: 'https://lacumbre.sbunified.org/', category: 'Middle' },
    { name: 'Goleta Valley Junior High', image: '/placeholder3.jpg', url: 'https://gvjh.sbunified.org/', category: 'Middle' },
    { name: 'Santa Barbara Middle School', image: '/placeholder1.jpg', url: 'https://www.sbms.org/', category: 'Private' },
    { name: 'Adams Elementary', image: '/placeholder2.jpg', url: 'https://adams.sbunified.org/', category: 'Elementary' },
    { name: 'Monroe Elementary', image: '/placeholder3.jpg', url: 'https://monroe.sbunified.org/', category: 'Elementary' },
    { name: 'Roosevelt Elementary', image: '/placeholder1.jpg', url: 'https://roosevelt.sbunified.org/', category: 'Elementary' },
    { name: 'Peabody Charter', image: '/placeholder2.jpg', url: 'https://www.peabodycharter.org/', category: 'Elementary' },
    { name: 'Washington Elementary', image: '/placeholder3.jpg', url: 'https://washington.sbunified.org/', category: 'Elementary' },
    { name: 'Cleveland Elementary', image: '/placeholder1.jpg', url: 'https://cleveland.sbunified.org/', category: 'Elementary' },
    { name: 'Harding Elementary', image: '/placeholder2.jpg', url: 'https://harding.sbunified.org/', category: 'Elementary' },
    { name: 'Franklin Elementary', image: '/placeholder3.jpg', url: 'https://franklin.sbunified.org/', category: 'Elementary' },
    { name: 'McKinley Elementary', image: '/placeholder1.jpg', url: 'https://mckinley.sbunified.org/', category: 'Elementary' },
    { name: 'Cold Spring School', image: '/placeholder2.jpg', url: 'https://www.coldspringschool.net/', category: 'Private' },
    { name: 'Mount Carmel School', image: '/placeholder3.jpg', url: 'https://mountcarmelschool.net/', category: 'Private' },
    { name: 'Carpinteria Middle', image: '/placeholder1.jpg', url: 'https://cms.cusd.net/', category: 'Middle' },
    { name: 'Aliso Elementary', image: '/placeholder2.jpg', url: 'https://aliso.cusd.net/', category: 'Elementary' },
    { name: 'Canalino Elementary', image: '/placeholder3.jpg', url: 'https://canalino.cusd.net/', category: 'Elementary' },
    { name: 'Summerland School', image: '/placeholder1.jpg', url: 'https://summerland.cusd.net/', category: 'Elementary' },
    { name: 'The Howard School', image: '/placeholder2.jpg', url: 'https://www.thehowardschool.org/', category: 'Private' },
    { name: 'Cate School', image: '/placeholder3.jpg', url: 'https://www.cate.org/', category: 'Private' },
    { name: 'Pacifica Graduate Institute', image: '/placeholder1.jpg', url: 'https://www.pacifica.edu/', category: 'College' },
    { name: 'Westmont College', image: '/placeholder2.jpg', url: 'https://www.westmont.edu/', category: 'College' },
    { name: 'UCSB', image: '/placeholder3.jpg', url: 'https://www.ucsb.edu/', category: 'College' },
    { name: 'SBCC', image: '/placeholder1.jpg', url: 'https://www.sbcc.edu/', category: 'College' },
  ];

  const [filter, setFilter] = useState('All');

  const filters = ['All', 'Elementary', 'Middle', 'Private', 'College'];

  const visible = filter === 'All' ? schools : schools.filter((s) => s.category === filter);

  return (
    <section style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem' }}>
      <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 16, flexWrap: 'wrap' }}>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}                  // <-- fixed syntax
            style={{
              padding: '0.45rem 0.9rem',
              borderRadius: 999,
              border: filter === f ? '1px solid #111' : '1px solid #ddd',
              background: filter === f ? '#111' : '#fff',
              color: filter === f ? '#fff' : '#111',
              cursor: 'pointer'
            }}
          >
            {f}
          </button>
        ))}
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
        gap: '1.5rem'
      }}>
        {visible.map((s) => (
          <SchoolCard key={s.name} name={s.name} image={s.image} url={s.url} />
        ))}
      </div>
    </section>
  );
}
