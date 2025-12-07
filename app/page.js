export default function Page() {
  return (
    <main style={{ fontFamily: 'sans-serif', lineHeight: '1.6', color: '#1a1a1a' }}>
      
      {/* Hero Section */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#f8f8f8', textAlign: 'center' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ryan Kell - Santa Barbara Real Estate</h1>
        <p style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Helping you find your dream home in Santa Barbara, Carpinteria, Montecito, and Goleta.
        </p>
        <a 
          href="#listings" 
          style={{ padding: '0.8rem 2rem', backgroundColor: '#0070f3', color: '#fff', borderRadius: '5px', textDecoration: 'none' }}
        >
          View Listings
        </a>
      </section>

      {/* Featured Properties */}
      <section id="listings" style={{ padding: '4rem 2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', textAlign: 'center' }}>Featured Properties</h2>
        <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <li style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
            <p>Property 1</p>
            <p>Montecito</p>
            <p>$2,500,000</p>
          </li>
          <li style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
            <p>Property 2</p>
            <p>Carpinteria</p>
            <p>$1,750,000</p>
          </li>
          <li style={{ border: '1px solid #ddd', padding: '1rem', borderRadius: '8px' }}>
            <p>Property 3</p>
            <p>Goleta</p>
            <p>$3,200,000</p>
          </li>
        </ul>
      </section>

      {/* Neighborhoods */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#f8f8f8' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>Neighborhoods</h2>
        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>
          <li>Montecito</li>
          <li>Carpinteria</li>
          <li>Goleta</li>
          <li>Other Santa Barbara Areas</li>
        </ul>
      </section>

      {/* About / Why Work With Me */}
      <section style={{ padding: '4rem 2rem' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem', textAlign: 'center' }}>Why Work With Me</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          With years of local experience in Santa Barbara real estate, I help buyers and sellers navigate the market confidently.  
          I prioritize personalized service, transparency, and results, making your home journey smooth and successful.
        </p>
      </section>

      {/* Contact */}
      <section style={{ padding: '4rem 2rem', backgroundColor: '#f8f8f8', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Contact</h2>
        <p>Email: ryan@example.com</p>
        <p>Phone: (123) 456-7890</p>
      </section>

    </main>
  );
}
