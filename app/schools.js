'use client';

import SchoolCard from './components/SchoolCard';

const schools = [
  { name: 'La Colina Elementary', image: '/schools/lacolina.jpg', url: 'https://lacolina.sbunified.org/' },
  { name: 'La Cumbre Junior High', image: '/schools/lacumbre.jpg', url: 'https://lacumbre.sbunified.org/' },
  { name: 'Goleta Valley Junior High', image: '/schools/gvjhs.jpg', url: 'https://gvjh.sbunified.org/' },
  { name: 'Santa Barbara Middle School', image: '/schools/sbms.jpg', url: 'https://www.sbms.org/' },
  { name: 'Adams Elementary', image: '/schools/adams.jpg', url: 'https://adams.sbunified.org/' },
  { name: 'Monroe Elementary', image: '/schools/monroe.jpg', url: 'https://monroe.sbunified.org/' },
  { name: 'Roosevelt Elementary', image: '/schools/roosevelt.jpg', url: 'https://roosevelt.sbunified.org/' },
  { name: 'Peabody Charter', image: '/schools/peabody.jpg', url: 'https://www.peabodycharter.org/' },
  { name: 'Washington Elementary', image: '/schools/washington.jpg', url: 'https://washington.sbunified.org/' },
  { name: 'Cleveland Elementary', image: '/schools/cleveland.jpg', url: 'https://cleveland.sbunified.org/' },
  { name: 'Harding Elementary', image: '/schools/harding.jpg', url: 'https://harding.sbunified.org/' },
  { name: 'Franklin Elementary', image: '/schools/franklin.jpg', url: 'https://franklin.sbunified.org/' },
  { name: 'McKinley Elementary', image: '/schools/mckinley.jpg', url: 'https://mckinley.sbunified.org/' },
  { name: 'Cold Spring School', image: '/schools/coldspring.jpg', url: 'https://www.coldspringschool.net/' },
  { name: 'Mount Carmel School', image: '/schools/mountcarmel.jpg', url: 'https://mountcarmelschool.net/' },
  { name: 'Carpinteria Middle', image: '/schools/cms.jpg', url: 'https://cms.cusd.net/' },
  { name: 'Aliso Elementary', image: '/schools/aliso.jpg', url: 'https://aliso.cusd.net/' },
  { name: 'Canalino Elementary', image: '/schools/canalino.jpg', url: 'https://canalino.cusd.net/' },
  { name: 'Summerland School', image: '/schools/summerland.jpg', url: 'https://summerland.cusd.net/' },
  { name: 'The Howard School', image: '/schools/howard.jpg', url: 'https://www.thehowardschool.org/' },
  { name: 'Cate School', image: '/schools/cate.jpg', url: 'https://www.cate.org/' },
  { name: 'Pacifica Graduate Institute', image: '/schools/pacifica.jpg', url: 'https://www.pacifica.edu/' },
  { name: 'Westmont College', image: '/schools/westmont.jpg', url: 'https://www.westmont.edu/' },
];

export default function Schools() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {schools.map((s) => (
        <SchoolCard key={s.name} name={s.name} image={s.image} url={s.url} />
      ))}
    </div>
  );
}
