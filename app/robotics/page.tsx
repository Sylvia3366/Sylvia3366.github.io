"use client";
import Link from 'next/link';
import { motion } from "framer-motion";

export default function Robotics() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
    <main className="flex flex-col p-10 bg-[#692626] bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:24px_24px] text-white">
  <h1 className="text-5xl font-bold text-center">Robotics</h1>
  <p className="text-[#ed7e94] font-bold mt-4 text-xl text-center">Beginnings of a dream 🔧</p>
  
  <p className="mt-8 text-center">
    My passion for baking, like most of my personality, grew during the pandemic. Stuck at home with not much else to do, I took my shampoo no-borax, no-glue, no-glitter slime recipes, did a 180, and swapped for a whisk and some couple of plastic measuring spoons I'll eventually ditch for sleek, modern tech.
  </p>
<br />
  <br />
  <br />
  <p className="text-5xl font-bold text-center">
    Wait, let me cook...
  </p><br />
  <div className="flex flex-col md:flex-row items-center gap-8 w-full">
  {/* Left */}
  <div className="relative overflow-hidden rounded-2xl w-full md:w-1/2 h-80">
    <img src="/lbmuffins.jpg" alt="Lemon Blueberry Muffins" className="h-full w-full object-cover" />
    <div className="absolute bottom-4 left-4 text-white z-10">
      <h3 className="text-xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Lemon Blueberry Muffins for Mother's Day</h3>
    </div>
  </div>

  {/* Right */}
  <div className="w-full md:w-1/2 text-white">
    <h3 className="text-3xl font-bold">Motivation</h3>
    <p className="text-white max-w-5xl text-left">
      I like the process, I like the results, I even enjoy the dish washing part (what's there not to love for me?). While I like repeating my favorite recipes, the thought trying new ones always have me unable to sleep at night. 
      <br></br>
      <br></br>
      I used to copy recipes exactly one for one from the aesthetic, little instagram posts I'd find, but more recently, I've begun experimenting with my own ideas. A simple example: muffins. I've made a lot of different muffins (red velvet, matcha pandan, pistachio chocolate...) and greek yogurt is always a must. Trust me, I will find a way to incorporate greek yogurt no matter what. The acidity reacts with the baking soda and makes it fluffier and taller, it is non-negotiable!!
    </p>
  </div>
</div>

<p className="mt-5 text-[#ed7e94] font-bold mt-4 text-xl text-center">And more to come... 🪛</p>

</main>
</motion.div>
  );
}
