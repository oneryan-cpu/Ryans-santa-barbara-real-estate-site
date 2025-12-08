'use client';

import SchoolCard from '../../components/SchoolCard';

// Deployment-safe placeholder images
// Replace these with the real school images later
const schools = [
  { name: 'Santa Barbara High', image: '/placeholder1.jpg', description: 'Top public high school in Santa Barbara.', url: 'https://sbhighschool.com' },
  { name: 'Montecito Union School', image: '/placeholder2.jpg', description: 'Elementary & middle school with strong academics.', url: 'https://montecitounion.org' },
  { name: 'Carpinteria Middle School', image: '/placeholder3.jpg', description: 'Highly rated school with a great community.', url: 'https://cms.cusd.net/' },
  { name: 'La Colina Elementary', image: '/placeholder1.jpg', description: 'Elementary school in Santa Barbara.', url: 'https://lacolina.sbunified.org/' },
  { name: 'La Cumbre Elementary', image: '/placeholder2.jpg', description: 'Elementary school in Santa Barbara.', url: 'https://lacumbre.sbunified.org/' },
  { name: 'Goleta Valley Junior High', image: '/placeholder3.jpg', description: 'Middle school serving Goleta.', url: 'https://gvjh.sbunified.org/' },
  { name: 'Santa Barbara Middle School', image: '/placeholder1.jpg', description: 'Middle school in Santa Barbara.', url: 'https://www.sbms.org/' },
  { name: 'Riviera School', image: '/placeholder2.jpg', description: 'Elementary school with a community focus.', url: 'https://www.rivieraschool.org/' },
  { name: 'Howard School', image: '/placeholder3.jpg', description: 'Private school in Carpinteria.', url: 'https://www.thehowardschool.org/' },
  { name: 'Cate School', image: '/placeholder1.jpg', description: 'Private college preparatory school.', url: 'https://www.cate.org/' },
  { name: 'Westmont College', image: '/placeholder2.jpg', description: 'Private liberal arts college.', url: 'https://www.westmont.edu/' },
  { name: 'Pacifica Graduate Institute', image: '/placeholder3.jpg', description: 'Graduate programs in depth psychology.', url: 'https://www.pacifica.edu/' },
];

export default function SchoolsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {schools.map((s) => (
        <SchoolCard
          key={s.name}
          name={s.name}
          description={s.description}
          image={s.image}
          url={s.url}
        />
      ))}
    </div>
  );
}
