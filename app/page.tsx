"use client";
import Image from "next/image";
import Link from 'next/link';
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
    >
    <main className="flex flex-col items-center p-10 bg-[#0a192f] bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:24px_24px] text-white">
  <h1 className="text-5xl font-bold text-left">Hello, I’m Sylvia</h1>
  <p className="text-[#1fa052] font-bold mt-4 text-xl text-right">Bronx High School of Science ‘27</p>
  
  <p className="mt-8 max-w-5xl text-center">
    This is the online diary documenting my life because I have too much to think and say but nowhere to put it towards (I can put them on my supplements for college but that might get me rejected from everything), essentially a diary of my uneventful life ♥︎
  </p>
<br />
  <br />
  <br />
  <p className="text-5xl font-bold">
    I do some stuff.
  </p><br />
  <div className="flex h-64 w-full gap-4 group">
  {/* Projects */}
  <div className="relative overflow-hidden rounded-2xl transition-all duration-500 ease-in-out flex-[1] group-hover:opacity-50 group-hover:blur-sm hover:!opacity-100 hover:!blur-none hover:!flex-[2]">
    <Link href="/projects" className="block h-full w-full cursor-pointer">
      <img src="/projects.jpg" alt="Personal Projects" className="h-full w-full object-cover" />
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-xl font-bold">Personal Projects</h3>
      </div>
    </Link>
  </div>

  {/* Robotics */}
  <div className="relative overflow-hidden rounded-2xl transition-all duration-500 ease-in-out flex-[1] group-hover:opacity-50 group-hover:blur-sm hover:!opacity-100 hover:!blur-none hover:!flex-[2]">
    <Link href="/robotics" className="block h-full w-full cursor-pointer">
      <img src="/robots.jpg" alt="VEX Robotics" className="h-full w-full object-cover" />
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-xl font-bold">VEX Robotics</h3>
      </div>
    </Link>
  </div>

  {/* Baking */}
  <div className="relative overflow-hidden rounded-2xl transition-all duration-500 ease-in-out flex-[1] group-hover:opacity-50 group-hover:blur-sm hover:!opacity-100 hover:!blur-none hover:!flex-[2]">
    <Link href="/baking" className="block h-full w-full cursor-pointer">
      <img src="/bake.jpg" alt="Baking" className="h-full w-full object-cover" />
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-xl font-bold">Baking</h3>
      </div>
    </Link>
  </div>

  {/* Dance */}
  <div className="relative overflow-hidden rounded-2xl transition-all duration-500 ease-in-out flex-[1] group-hover:opacity-50 group-hover:blur-sm hover:!opacity-100 hover:!blur-none hover:!flex-[2]">
    <Link href="/dance" className="block h-full w-full cursor-pointer">
      <img src="/dance.jpg" alt="Dance" className="h-full w-full object-cover" />
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-xl font-bold">Dance</h3>
      </div>
    </Link>
  </div>

  {/* Writing */}
  <div className="relative overflow-hidden rounded-2xl transition-all duration-500 ease-in-out flex-[1] group-hover:opacity-50 group-hover:blur-sm hover:!opacity-100 hover:!blur-none hover:!flex-[2]">
    <Link href="/diary" className="block h-full w-full cursor-pointer">
      <img src="/travels.jpg" alt="Diary" className="h-full w-full object-cover" />
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-xl font-bold">Writing</h3>
      </div>
    </Link>
  </div>
</div>
<br />
<br />
<br />
<br />
</main>
</motion.div>
  );
}
