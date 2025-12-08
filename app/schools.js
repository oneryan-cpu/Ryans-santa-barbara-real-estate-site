"use client";
import React, { useState } from "react";
import SchoolCard from "../components/SchoolCard";

export default function Schools({ schools }) {
  const [filter, setFilter] = useState("All");

  const filters = ["All", "Public", "Private", "Elementary", "Middle", "High", "College"];

  const filtered = schools.filter((school) => {
    if (filter === "All") return true;
    return school.category.includes(filter);
  });

  return (
    <section style={{ maxWidth: 1200, margin: "0 auto", padding: "3rem 1rem" }}>
      <h2 className="text-4xl font-bold mb-6 text-center">Schools</h2>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {filters.map((f) => (
          <button
            key={f}
            onClick={()} />
          </div>
        ))}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((school) => (
          <SchoolCard key={school.name} {...school} />
        ))}
      </div>
    </section>
  );
}
