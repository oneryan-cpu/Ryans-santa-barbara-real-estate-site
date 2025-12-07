"use client";

export default function SchoolCard({ name, image }) {
  return (
    <div style={{textAlign:"center"}}>
      <img src={image} alt={name} style={{width:200, borderRadius:8}} />
      <p>{name}</p>
    </div>
  );
}
