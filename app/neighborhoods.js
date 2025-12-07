'use client';
import NeighborhoodCard from '../components/NeighborhoodCard';

import React from 'react';

const neighborhoods = [
  {
    name: 'The Riviera',
    image: '/neighborhood1.jpg',
    url: 'https://villagesite.com/communities/riviera',
    description: 'Elevated homes with stunning ocean views and quiet streets that feel secluded yet close to downtown.'
  },
  {
    name: 'The Mesa',
    image: '/neighborhood2.jpg',
    url: 'https://villagesite.com/communities/mesa',
    description: 'Coastal community offering relaxed beachside living with easy access to city amenities.'
  },
  {
    name: 'Samarkand',
    image: '/placeholder1.jpg',
    url: 'https://villagesite.com/communities/samarkand',
    description: 'Family-friendly neighborhood with charming historic homes and mature landscaping.'
  },
  {
    name: 'San Roque',
    image: '/placeholder2.jpg',
    url: 'https://villagesite.com/communities/san-roque',
    description: 'Traditional Santa Barbara homes with lush gardens and a strong sense of community.'
  },
  {
    name: 'Hope Ranch',
    image: '/placeholder3.jpg',
    url: 'https://villagesite.com/communities/hope-ranch',
    description: 'Gated estates with equestrian facilities and sweeping canyon and ocean views.'
  },
  {
    name: 'Montecito',
    image: '/neighborhood1.jpg',
    url: 'https://villagesite.com/communities/montecito',
    description: 'Exclusive enclave of luxury estates, renowned for privacy, elegance, and scenic beauty.'
  },
  {
    name: 'Carpinteria',
    image: '/neighborhood2.jpg',
    url: 'https://villagesite.com/communities/carpinteria',
    description: 'Charming coastal town with relaxed lifestyle, excellent beaches, and family-friendly streets.'
  },
  {
    name: 'Mission Canyon',
    image: '/placeholder1.jpg',
    url: 'https://villagesite.com/communities/mission-canyon',
    description: 'Hillside homes surrounded by oak woodlands, offering tranquility and panoramic views.'
  },
  {
    name: 'Westside',
    image: '/placeholder2.jpg',
    url: 'https://villagesite.com/communities/westside',
    description: 'Central neighborhood close to shops, dining, and cultural landmarks with a vi
