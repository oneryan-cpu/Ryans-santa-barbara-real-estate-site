"use client";

export default function NeighborhoodCard({ name }) {
  return (
    <div style={{border:"1px solid #eee", padding:20, borderRadius:8}}>
      <h3>{name}</h3>
    </div>
  );
}
