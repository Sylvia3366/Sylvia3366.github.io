"use client";
import Link from 'next/link';
import { motion } from "framer-motion";

export default function hips() {
return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >

    <main className="flex flex-col p-10 bg-[#3f2745] bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:24px_24px] text-white">
  <h1 className="text-5xl font-bold text-center">The Moon Stands Still, Yet The Stars Keep Falling 🌠</h1>
  <p className="text-[#c0afe2] font-bold mt-4 text-xl text-center">October 2025 · Short Stories</p>
  <p className="text-center">A confession from beyond the stars that never quite reach its destination. It continues to fall from the heavens with the regret of someone who learned love too late.</p>
  <div className="bg-[#2a2233] border border-[#c0afe2]/30 rounded-2xl p-8 shadow-xl mt-8">
  <p>You’re the muse of my life—the one and only light that carves a path through the endless nights. 
  <br /><br />Without you, I’m nothing but a shadow. Without me, you’re beautiful and perfect. Without you, I’m nothing but a wandering soul tethered to a meaningless world bound by an even more meaningless shell.
  <br /><br />I remember our early days. Those days when we believed the city’s borders to be the edge of our world. I remember the patterns you’d weave with your delicate fingers, the careful dreams you’d etch into your sketch book. Your face, despite its purpled hues and swollen scars, only focused on the work in your hands. And still, evermore, I remember your relentless spirit that shown brighter than the rays of our sun. 
  <br /><br />To them, I’ve learned to be docile. I learned to empty out the emotions that make me human because humans have long ceased to exist on our planet. Then there’s you, the complete opposite. You chose to give life to what was long lost. You gave purpose to an aimless existence that is mine. You gave life to a hollow machine never meant to run.
  <br /><br />You, who dug tirelessly through ash for a past now smothered by time.
  <br /><br />You, who yearned for the love that was torn from you that night. 
  <br /><br />You, who watched your world flicker and fade. 
  <br /><br />For the first time, I found myself wanting something. I wanted to be that world you mourned, but really, did I ever even stand a chance?
  <br /><br />I loved you. I loved you, and till this day, I love you even more. I didn’t know love, and yet, I loved you. I did what seemed impossible because seeing you made everything possible. 
  <br /><br />You said you did not feel the same. You couldn’t possibly. 
  <br /><br />That night, when I saw our friends together—the way she held him in her arms—I felt an emotion I still can’t quite describe, even now. I don’t know. I don’t remember what it was or could’ve been. But I couldn’t stop thinking of you.
  <br /><br />Maybe my love for you was not the warm feeling you chased after. Maybe had I learned to love, you’d have looked at me with those eyes of longing. But “maybe” was long ago. Now, I can only wonder what “maybe” could’ve been had we not been born into a world that never taught us to love. 
        </p>
  </div>
  <br />
    
  <p className="text-[#c0afe2] font-bold mt-4 text-xl text-center">Author's Note</p>
  <p className="text-center">I wrote this for an assignment in which I had to read out the piece to my English teacher, one to one. It’s a piece of yearning, filled with regret and reminiscence. I chose to be rather personal despite it being my first time physically reading out to an active audience (singular). While I found the experience to be quite duanting, the feedback I received was rewarding nonetheless.</p>
</main>
</motion.div>
  );
}
