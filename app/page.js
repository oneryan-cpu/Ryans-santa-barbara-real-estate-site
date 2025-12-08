'use client';
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeaturedProperties from '../components/FeaturedProperties';
import Neighborhoods from './neighborhoods';
import Schools from './schools';

export default function Page() {
  return (
    <>
      <Navbar />

      <HeroSection 
        images={[
          '/neighborhood1.jpg',
          '/neighborhood2.jpg',
          '/placeholder1.jpg'
        ]}
        title="Ryan Kell - Santa Barbara Real Estate"
        subtitle="Explore neighborhoods, properties, and listings in Santa Barbara."
      />

      <FeaturedProperties 
        properties={[
          { title: 'Property 1', description: 'Beautiful 4-bedroom home in Montecito.', image: '/placeholder1.jpg' },
          { title: 'Property 2', description: 'Stunning ocean-view estate.', image: '/placeholder2.jpg' },
          { title: 'Property 3', description: 'Modern home in Carpinteria.', image: '/placeholder3.jpg' },
        ]}
      />

      <Neighborhoods 
        neighborhoods={[
          { name: 'The Riviera', image: '/neighborhood1.jpg', description: 'Elevated homes with stunning ocean views.', url: 'https://villagesite.com/communities/riviera' },
          { name: 'The Mesa', image: '/neighborhood2.jpg', description: 'Quiet neighborhoods close to the beach and city.', url: 'https://villagesite.com/communities/mesa' },
          { name: 'Samarkand', image: '/placeholder1.jpg', description: 'Family-friendly streets with historic charm.', url: 'https://villagesite.com/communities/samarkand' },
          { name: 'San Roque', image: '/placeholder2.jpg', description: 'Traditional Santa Barbara homes with mature landscaping.', url: 'https://villagesite.com/communities/san-roque' },
          { name: 'Hope Ranch', image: '/placeholder3.jpg', description: 'Gated estates with equestrian facilities.', url: 'https://villagesite.com/communities/hope-ranch' },
          { name: 'Montecito', image: '/neighborhood1.jpg', description: 'Exclusive community with luxury estates.', url: 'https://villagesite.com/communities/montecito' },
          { name: 'Carpinteria', image: '/neighborhood2.jpg', description: 'Charming coastal town with relaxed lifestyle.', url: 'https://villagesite.com/communities/carpinteria' },
          { name: 'Mission Canyon', image: '/placeholder1.jpg', description: 'Hillside homes with scenic views.', url: 'https://villagesite.com/communities/mission-canyon' },
          { name: 'Westside', image: '/placeholder2.jpg', description: 'Central neighborhood close to shops and dining.', url: 'https://villagesite.com/communities/westside' },
          { name: 'Goleta', image: '/placeholder3.jpg', description: 'Family-friendly area with good schools.', url: 'https://villagesite.com/communities/goleta' },
        ]}
      />

      <Schools
  schools={[
    // ——————————— ELEMENTARY ———————————
    {
      name: "Adams Elementary",
      image: "https://adams.sbunified.org/static/media/hero.123.jpg",
      url: "https://adams.sbunified.org/",
      category: ["Public", "Elementary"],
      description: "A welcoming school with strong community support.",
    },
    {
      name: "Monroe Elementary",
      image: "https://monroe.sbunified.org/hero.jpg",
      url: "https://monroe.sbunified.org/",
      category: ["Public", "Elementary"],
      description: "Student-focused academics with a supportive culture.",
    },
    {
      name: "Roosevelt Elementary",
      image: "https://roosevelt.sbunified.org/hero.jpg",
      url: "https://roosevelt.sbunified.org/",
      category: ["Public", "Elementary"],
      description: "Historic campus offering enriched academics.",
    },
    {
      name: "Peabody Charter",
      image: "https://www.peabodycharter.org/wp-content/uploads/header.jpg",
      url: "https://www.peabodycharter.org/",
      category: ["Public", "Elementary"],
      description: "A beloved Santa Barbara charter school.",
    },
    {
      name: "Washington Elementary",
      image: "https://washington.sbunified.org/hero.jpg",
      url: "https://washington.sbunified.org/",
      category: ["Public", "Elementary"],
      description: "Strong academics in a scenic upper Eastside setting.",
    },
    {
      name: "Cleveland Elementary",
      image: "https://cleveland.sbunified.org/hero.jpg",
      url: "https://cleveland.sbunified.org/",
      category: ["Public", "Elementary"],
      description: "Community-driven campus with a supportive staff.",
    },
    {
      name: "Harding Elementary",
      image: "https://harding.sbunified.org/hero.jpg",
      url: "https://harding.sbunified.org/",
      category: ["Public", "Elementary"],
      description: "Inclusive environment and strong early education.",
    },
    {
      name: "Franklin Elementary",
      image: "https://franklin.sbunified.org/hero.jpg",
      url: "https://franklin.sbunified.org/",
      category: ["Public", "Elementary"],
      description: "Historic Eastside campus with committed educators.",
    },
    {
      name: "McKinley Elementary",
      image: "https://mckinley.sbunified.org/hero.jpg",
      url: "https://mckinley.sbunified.org/",
      category: ["Public", "Elementary"],
      description: "Balanced academics and community engagement.",
    },

    // Private Elementary
    {
      name: "Cold Spring School",
      image: "https://www.coldspringschool.net/images/header.jpg",
      url: "https://www.coldspringschool.net/",
      category: ["Private", "Elementary"],
      description: "Prestigious Montecito K-6 public district school.",
    },
    {
      name: "Our Lady of Mount Carmel School",
      image: "https://mountcarmelschool.net/hero.jpg",
      url: "https://mountcarmelschool.net/",
      category: ["Private", "Elementary"],
      description: "Faith-based education in Montecito.",
    },
    {
      name: "The Howard School",
      image: "https://www.thehowardschool.org/wp-content/uploads/header.jpg",
      url: "https://www.thehowardschool.org/",
      category: ["Private", "Elementary"],
      description: "Alternative learning environment in Carpinteria.",
    },

    // ——————————— MIDDLE ———————————
    {
      name: "La Colina Junior High",
      image: "https://lacolina.sbunified.org/hero.jpg",
      url: "https://lacolina.sbunified.org/",
      category: ["Public", "Middle"],
      description: "Popular middle school with a wide academic offering.",
    },
    {
      name: "La Cumbre Junior High",
      image: "https://lacumbre.sbunified.org/hero.jpg",
      url: "https://lacumbre.sbunified.org/",
      category: ["Public", "Middle"],
      description: "Strong arts and academic programs.",
    },
    {
      name: "Goleta Valley Junior High",
      image: "https://gvjh.sbunified.org/hero.jpg",
      url: "https://gvjh.sbunified.org/",
      category: ["Public", "Middle"],
      description: "Highly rated middle school in Goleta.",
    },
    {
      name: "Santa Barbara Middle School",
      image: "https://www.sbms.org/wp-content/uploads/header.jpg",
      url: "https://www.sbms.org/",
      category: ["Private", "Middle"],
      description: "Experiential learning with strong community values.",
    },

    // Carpinteria Middle School
    {
      name: "Carpinteria Middle School",
      image: "https://cms.cusd.net/hero.jpg",
      url: "https://cms.cusd.net/",
      category: ["Public", "Middle"],
      description: "Small, supportive campus close to the foothills.",
    },

    // ——————————— HIGH SCHOOLS ———————————
    {
      name: "Santa Barbara High School",
      image: "https://sbhs.sbunified.org/hero.jpg",
      url: "https://sbhs.sbunified.org/",
      category: ["Public", "High"],
      description: "Historic campus known for strong arts programs.",
    },
    {
      name: "San Marcos High School",
      image: "https://sanmarcos.sbunified.org/hero.jpg",
      url: "https://sanmarcos.sbunified.org/",
      category: ["Public", "High"],
      description: "Renowned academics and athletics.",
    },
    {
      name: "Dos Pueblos High School",
      image: "https://dphs.sbunified.org/hero.jpg",
      url: "https://dphs.sbunified.org/",
      category: ["Public", "High"],
      description: "STEM-focused programs in Goleta.",
    },
    {
      name: "Carpinteria High School",
      image: "https://chs.cusd.net/hero.jpg",
      url: "https://chs.cusd.net/",
      category: ["Public", "High"],
      description: "A tight-knit campus in the heart of Carpinteria.",
    },

    // ——————————— PRIVATES ———————————
    {
      name: "Riviera Ridge School",
      image: "https://www.rivieraridge.org/wp-content/uploads/header.jpg",
      url: "https://www.rivieraridge.org/",
      category: ["Private"],
      description: "Independent K-8 on the Riviera.",
    },
    {
      name: "Cate School",
      image: "https://www.cate.org/wp-content/uploads/header.jpg",
      url: "https://www.cate.org/",
      category: ["Private", "High"],
      description: "Prestigious boarding school in Carpinteria.",
    },
    {
      name: "Pacifica Christian High School",
      image: "https://www.pacifica.edu/wp-content/uploads/header.jpg",
      url: "https://www.pacifica.edu/",
      category: ["Private", "High"],
      description: "Independent Christian high school in SB.",
    },

    // ——————————— COLLEGES ———————————
    {
      name: "UCSB",
      image: "https://www.ucsb.edu/sites/default/files/styles/hero_home/public/homepage/ucsb-campus.jpg",
      url: "https://www.ucsb.edu/",
      category: ["College"],
      description: "Top-ranked UC campus on the ocean.",
    },
    {
      name: "Santa Barbara City College",
      image: "https://sbcc.edu/images/header.jpg",
      url: "https://sbcc.edu/",
      category: ["College"],
      description: "Award-winning community college with ocean views.",
    },
    {
      name: "Westmont College",
      image: "https://www.westmont.edu/sites/default/files/styles/hero_home/public/2022-08/hero_westmont.jpg",
      url: "https://www.westmont.edu/",
      category: ["College"],
      description: "Private Christian liberal arts college in Montecito.",
    },
  ]}
/>


      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '2rem' }}>
        <h2>Contact</h2>
        <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <input type="text" placeholder="Name" required style={{ padding: '0.5rem', borderRadius: 4, border: '1px solid #ccc' }} />
          <input type="email" placeholder="Email" required style={{ padding: '0.5rem', borderRadius: 4, border: '1px solid #ccc' }} />
          <textarea placeholder="Message" required style={{ padding: '0.5rem', borderRadius: 4, border: '1px solid #ccc' }} />
          <button type="submit" style={{ padding: '0.75rem', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' }}>Send Message</button>
        </form>
      </section>
    </>
  );
}
