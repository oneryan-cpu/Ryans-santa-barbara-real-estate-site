import ContactForm from './components/ContactForm';
import NeighborhoodCard from './components/NeighborhoodCard';
import SchoolCard from './components/SchoolCard';

// Inside return:
<main>
  <HeroSection currentImage={heroImages[currentIndex]} />
  <FeaturedProperties />
  
  <section>
    <h2>Neighborhoods</h2>
    <NeighborhoodCard name="Montecito" />
    <NeighborhoodCard name="Carpinteria" />
  </section>

  <section>
    <h2>Schools</h2>
    <SchoolCard name="School 1" image="/school1.jpg" />
    <SchoolCard name="School 2" image="/school2.jpg" />
  </section>

  <ContactForm />
</main>
