"use client";
import Link from 'next/link';
import { motion } from "framer-motion";

export default function Dance() {
  return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
    >
    <main className="flex flex-col p-10 bg-[#30401c] bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:24px_24px] text-white">
  <h1 className="text-5xl font-bold text-center">Dance</h1>
  <p className="text-[#b9c798] font-bold mt-4 text-xl text-center">One stretch at a time 💃</p>
  
  <p className="mt-8 text-center">
    Dance was not a new face to me. I've known it for longer than I've known most my friends today. Unlike baking or robotics, dance was one of the things I gave up in the midst of COVID-19. That is something I'll always regret letting myself do in life. 
  </p>
<br />
  <br />
  <p className="text-5xl font-bold text-center">
    Wait, let me cook...
  </p><br />
  <div className="flex flex-col md:flex-row items-center gap-8 w-full">
  {/* Left */}
  <div className="relative overflow-hidden rounded-2xl w-full md:w-1/2 h-80">
    <img src="/lbsmuffins.jpg" alt="Lemon Blueberry Muffins" className="h-full w-full object-cover" />
    <div className="absolute bottom-4 left-4 text-white z-10">
      <h3 className="text-xl font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">Lemon Blueberry Muffins for Mother's Day</h3>
    </div>
  </div>

  {/* Right */}
  <div className="w-full md:w-1/2 text-white">
    <h3 className="text-3xl font-bold">History</h3>
    <p className="text-white max-w-5xl text-left">
      I began dancing in the second grade. My elementary school had offered my grade an opportunity to perform at Flushing Town Hall for a Lunar New Years event. It was random selection, but me and my good friend at the time decided to sign up together. We both got in, we commited, and the performance went amazing. 
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
    <img src="/coffee_buns.jpg" alt="Coffee Buns" className="h-full w-full object-cover" />
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

<p className="mt-5 text-[#aecce4] font-bold mt-4 text-xl text-center">Bakes on Instagram! 🍞</p>

</main>
</motion.div>
  );
}
