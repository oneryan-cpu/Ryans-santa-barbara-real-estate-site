"use client";

export default function ContactForm() {
  return (
    <form style={{maxWidth:500, margin:"40px auto", display:"flex", flexDirection:"column", gap:12}}>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea placeholder="Message"></textarea>
      <button type="submit">Send</button>
    </form>
  );
}
