"use client";
import Image from "next/image";
import PhotoCarousel from "./components/PhotoCarousel";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
    <main className="flex flex-col items-center p-10 bg-[#1a2954] text-white">
  <h1 className="text-5xl font-bold text-left">Hello, I’m Sylvia!</h1>
  <p className="text-[#1fa052] font-bold mt-4 text-xl text-right">Bronx High School of Science ‘27</p>
  
  <p className="mt-8 max-w-5xl text-center">
    I'm 17 years old and a high school senior as of late-2026, and an aspiring engineer who writes, bakes, and dances in my free time. I've created this online space to introduce myself, my passions and hobbies, share and log my work, and document my life ♥︎
  </p>
<br />
  <PhotoCarousel />
  <br />
  <br />
  <p className="text-5xl font-bold">
    I do some cool stuff :3!
  </p><br />
  <div className="flex h-64 w-full gap-4 group">
  {/* Projects */}
  <div className="relative overflow-hidden rounded-2xl transition-all duration-500 ease-in-out flex-[1] group-hover:opacity-50 group-hover:blur-sm hover:!opacity-100 hover:!blur-none hover:!flex-[2]">
    <img src="/projects.jpg" alt="Personal Projects" className="h-full w-full object-cover" />
    <div className="absolute bottom-4 left-4 text-white">
      <h3 className="text-xl font-bold">Personal Projects</h3>
    </div>
  </div>
  {/* Robotics */}
  <div className="relative overflow-hidden rounded-2xl transition-all duration-500 ease-in-out flex-[1] group-hover:opacity-50 group-hover:blur-sm hover:!opacity-100 hover:!blur-none hover:!flex-[2]">
    <img src="/robots.jpg" alt="VEX Robotics" className="h-full w-full object-cover" />
    <div className="absolute bottom-4 left-4 text-white">
      <h3 className="text-xl font-bold">VEX Robotics</h3>
    </div>
  </div>
  {/* Baking */}
  <div className="relative overflow-hidden rounded-2xl transition-all duration-500 ease-in-out flex-[1] group-hover:opacity-50 group-hover:blur-sm hover:!opacity-100 hover:!blur-none hover:!flex-[2]">
    <img src="/bake.jpg" alt="Baking" className="h-full w-full object-cover" />
    <div className="absolute bottom-4 left-4 text-white">
      <h3 className="text-xl font-bold">Baking</h3>
    </div>
  </div>
  {/* Dance */}
  <div className="relative overflow-hidden rounded-2xl transition-all duration-500 ease-in-out flex-[1] group-hover:opacity-50 group-hover:blur-sm hover:!opacity-100 hover:!blur-none hover:!flex-[2]">
    <img src="/dance.jpg" alt="Dance" className="h-full w-full object-cover" />
    <div className="absolute bottom-4 left-4 text-white">
      <h3 className="text-xl font-bold">Dance</h3>
    </div>
  </div>
  {/* Travels */}
  <div className="relative overflow-hidden rounded-2xl transition-all duration-500 ease-in-out flex-[1] group-hover:opacity-50 group-hover:blur-sm hover:!opacity-100 hover:!blur-none hover:!flex-[2]">
    <img src="/travels.jpg" alt="Travels" className="h-full w-full object-cover" />
    <div className="absolute bottom-4 left-4 text-white">
      <h3 className="text-xl font-bold">Travels</h3>
    </div>
  </div>
</div>
</main>
</motion.div>
  );
}
