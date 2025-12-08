"use client";
import React from "react";
import { motion } from "framer-motion";

export default function SchoolCard({ name, image, url, category, description }) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 200 }}
      className="block rounded-xl overflow-hidden shadow-md border border-gray-200 bg-white"
    >
      <div className="h-48 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-sm text-gray-700 mb-2">{description}</p>
        <span className="text-xs py-1 px-2 bg-gray-100 rounded-full text-gray-600">
          {category}
        </span>
      </div>
    </motion.a>
  );
}
