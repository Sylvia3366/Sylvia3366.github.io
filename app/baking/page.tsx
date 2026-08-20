"use client";
import Link from 'next/link';
import { motion } from "framer-motion";

export default function Baking() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
    <main className="flex flex-col p-10 bg-[#0a192f] bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:24px_24px] text-white">
  <h1 className="text-5xl font-bold text-center">Baking</h1>
  <p className="text-[#aecce4] font-bold mt-4 text-xl text-center">A toaster oven and a dream 💭</p>
  
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

<p className="mt-8 text-left">
    When I first started out, I had not been too serious. So, I didn't always have the right ingredients for certain recipes... but that sure as hell didn't stop me (I got my first pack of baking powder two months ago). One thing I'd always do is sub baking powder by using soda with an acid (typically lemon juice or rice vinegar).
  </p>

  <div className="mt-8 flex flex-col md:flex-row items-center gap-8 w-full">
  {/* Left */}
  <div className="w-full md:w-1/2 text-white space-y-4">
    <p className="text-white">
      Even now, I still do this. Case in point, I was making the diplomat cream that goes into cream puffs this afternoon, but did not have any corn starch at home. This is a regular occurance, I never have corn starch. Potato starch would be the usual hero, but today, it was rather grainy and after a quick google search, I found out it don't react the best with dairy anyway.
      <br></br>
      <br></br>
      So began my journey to try and implement the only other substitute I could think of: instant pudding mix. Luckily, it worked out very well. While I dont think I evaporated enough water for the puffs to fully rise in the oven, they still turned out very delicious and crunchy. And no, I will not be buying corn starch.
    </p>
  </div>

  {/* Right */}
  <div className="relative overflow-hidden rounded-2xl w-full md:w-1/2 h-80">
    <img src="/coffeebuns2.jpg" alt="Coffee Buns" className="h-full w-full object-cover" />
    <div className="absolute bottom-4 left-4 text-white z-10">
      <h3 className="text-xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Coffee Buns w/ Chocolate and Pistachio Filling</h3>
    </div>
  </div>
</div>

<h3 className="mt-12 text-3xl font-bold">Justification</h3>
<p className="text-left">
    Coming from a first generation immigrant household (I know, that's awesome in today's great American), it is a mindset I grew up with. We're all familiar with the saying: "money doesn't grow on trees." By no means is my family on the brink of financial ruin (I hope)—we aren't comfortable in the sense of big counches and polished marble floors, but we are comfortable in the sense that we get by and we have each other. 
    <br></br>
    <br></br>
    Point is, 12 grams of corn starch in a recipe I might make twice does not justify me buying a whole jar no one will touch ever again. The end is quite clear: it expires, it's tossed, goodbye $5. Let's be honest, $5 isn't a lot. Neither are pennies, yet we still store them in a 10-year-old piggy bank to count a few months later.
    </p>

    <p className="mt-12 text-5xl font-bold text-center">
    Bakes 🍰
  </p><br />

  <div className="mt-8 flex flex-col md:flex-row items-center gap-8 w-full">
  {/* Left */}
  <div className="relative overflow-hidden rounded-2xl w-full md:w-1/2 h-80">
    <img src="/cobread.jpg" alt="Chili Oil Scallion Focaccia" className="h-full w-full object-cover" />
    <div className="absolute bottom-4 left-4 text-white z-10">
      <h3 className="text-xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Chili Oil Scallion Focaccia</h3>
    </div>
  </div>

  {/* Right */}
  <div className="relative overflow-hidden rounded-2xl w-full md:w-1/2 h-80">
    <img src="/puffs.jpg" alt="Lemon Blueberry Muffins" className="h-full w-full object-cover" />
    <div className="absolute bottom-4 left-4 text-white z-10">
      <h3 className="text-xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Cream Puffs</h3>
    </div>
  </div>
</div>

<div className="mt-8 flex flex-col md:flex-row items-center gap-8 w-full">
  {/* Left */}
  <div className="relative overflow-hidden rounded-2xl w-full md:w-1/2 h-80">
    <img src="/coffeebuns.jpg" alt="Chili Oil Scallion Focaccia" className="h-full w-full object-cover" />
    <div className="absolute bottom-4 left-4 text-white z-10">
      <h3 className="text-xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Coffee Buns</h3>
    </div>
  </div>

  {/* Right */}
  <div className="relative overflow-hidden rounded-2xl w-full md:w-1/2 h-80">
    <img src="/pwcmuffins.jpg" alt="Lemon Blueberry Muffins" className="h-full w-full object-cover" />
    <div className="absolute bottom-4 left-4 text-white z-10">
      <h3 className="text-xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Pistachio White Chocolate Muffins</h3>
    </div>
  </div>
</div>

<div className="mt-8 flex flex-col md:flex-row items-center gap-8 w-full">
  {/* Left */}
  <div className="relative overflow-hidden rounded-2xl w-full md:w-1/2 h-80">
    <img src="/lbmuffins.jpg" alt="Chili Oil Scallion Focaccia" className="h-full w-full object-cover" />
    <div className="absolute bottom-4 left-4 text-white z-10">
      <h3 className="text-xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Lemon Blueberry Muffins</h3>
    </div>
  </div>

  {/* Right */}
  <div className="relative overflow-hidden rounded-2xl w-full md:w-1/2 h-80">
    <img src="/acinnamonroll.jpg" alt="Lemon Blueberry Muffins" className="h-full w-full object-cover" />
    <div className="absolute bottom-4 left-4 text-white z-10">
      <h3 className="text-xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Apple Cinnamon Rolls</h3>
    </div>
  </div>
</div>

<div className="mt-8 flex flex-col md:flex-row items-center gap-8 w-full">
  {/* Left */}
  <div className="relative overflow-hidden rounded-2xl w-full md:w-1/2 h-80">
    <img src="/bwccookie.jpg" alt="Chili Oil Scallion Focaccia" className="h-full w-full object-cover" />
    <div className="absolute bottom-4 left-4 text-white z-10">
      <h3 className="text-xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Biscoff White Chocolate Cookies</h3>
    </div>
  </div>

  {/* Right */}
  <div className="relative overflow-hidden rounded-2xl w-full md:w-1/2 h-80">
    <img src="/cmuffins.jpg" alt="Lemon Blueberry Muffins" className="h-full w-full object-cover" />
    <div className="absolute bottom-4 left-4 text-white z-10">
      <h3 className="text-xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Double Chocolate Muffins</h3>
    </div>
  </div>
</div>

<div className="mt-8 flex flex-col md:flex-row items-center gap-8 w-full">
  {/* Left */}
  <div className="relative overflow-hidden rounded-2xl w-full md:w-1/2 h-80">
    <img src="/rvmuffins.jpg" alt="Chili Oil Scallion Focaccia" className="h-full w-full object-cover" />
    <div className="absolute bottom-4 left-4 text-white z-10">
      <h3 className="text-xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Red Velvet Muffins</h3>
    </div>
  </div>

  {/* Right */}
  <div className="relative overflow-hidden rounded-2xl w-full md:w-1/2 h-80">
    <img src="/mpmuffins.jpg" alt="Lemon Blueberry Muffins" className="h-full w-full object-cover" />
    <div className="absolute bottom-4 left-4 text-white z-10">
      <h3 className="text-xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Matcha Pandan Muffins</h3>
    </div>
  </div>
</div>

<div className="mt-8 flex flex-col md:flex-row items-center gap-8 w-full">
  {/* Left */}
  <div className="relative overflow-hidden rounded-2xl w-full md:w-1/2 h-80">
    <img src="/mocreamcake.jpg" alt="Chili Oil Scallion Focaccia" className="h-full w-full object-cover" />
    <div className="absolute bottom-4 left-4 text-white z-10">
      <h3 className="text-xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Mango Orange Cream Cake</h3>
    </div>
  </div>

  {/* Right */}
  <div className="relative overflow-hidden rounded-2xl w-full md:w-1/2 h-80">
    <img src="/bcheesecake.jpg" alt="Lemon Blueberry Muffins" className="h-full w-full object-cover" />
    <div className="absolute bottom-4 left-4 text-white z-10">
      <h3 className="text-xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Biscoff Cheesecake</h3>
    </div>
  </div>
</div>

<div className="mt-8 flex flex-col md:flex-row items-center gap-8 w-full">
  {/* Left */}
  <div className="relative overflow-hidden rounded-2xl w-full md:w-1/2 h-80">
    <img src="/bubblewaffle.jpg" alt="Chili Oil Scallion Focaccia" className="h-full w-full object-cover" />
    <div className="absolute bottom-4 left-4 text-white z-10">
      <h3 className="text-xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Hong Kong Bubble Waffle</h3>
    </div>
  </div>

  {/* Right
  <div className="relative overflow-hidden rounded-2xl w-full md:w-1/2 h-80">
    <img src="/mpmuffins.jpg" alt="Lemon Blueberry Muffins" className="h-full w-full object-cover" />
    <div className="absolute bottom-4 left-4 text-white z-10">
      <h3 className="text-xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Matcha Pandan Muffins</h3>
    </div>
  </div> */}
</div>

<p className="mt-5 text-[#aecce4] font-bold mt-4 text-xl text-center">And more to come... 🍞</p>

</main>
</motion.div>
  );
}
