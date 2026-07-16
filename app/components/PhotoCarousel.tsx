"use client";
import { motion } from "framer-motion";

const images = [
  "/hqb.jpg",
  "/subway.jpg",
  "/adamina.jpg",
  "/sunset.jpg",
  "/sophia.jpg",
  "/manhattan.jpg",
  "/hqb.jpg"
];

export default function PhotoCarousel() {
  return (
    <div className="w-full max-w-3xl h-80 overflow-hidden rounded-3xl border-2 border-[#ffffff] shadow-2xl">
      <motion.div
        className="flex h-full"
        animate={{ x: ["0%", "-600%"] }}
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
      >
        {images.map((src, index) => (
          <img 
            key={index} 
            src={src} 
            className="w-full h-full object-cover flex-shrink-0"
            alt="carousel" 
          />
        ))}
      </motion.div>
    </div>
  );
}