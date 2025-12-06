
'use client';
import Link from 'next/link';
export default function Navbar() {
  return (
    <nav style={{background:'#fff', borderBottom:'1px solid #eee', padding:12}}>
      <div style={{maxWidth:1100, margin:'0 auto', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div style={{fontWeight:700}}>Ryan Kell | Village Properties</div>
        <div style={{display:'flex', gap:12}}>
          <Link href="/">Home</Link>
          <Link href="/neighborhoods">Neighborhoods</Link>
          <Link href="/schools">Schools</Link>
          <Link href="/property-search">Listings</Link>
          <Link href="/village-properties">Village Properties</Link>
        </div>
      </div>
    </nav>
  )
}
