"use client";
import Link from 'next/link';
import { motion } from "framer-motion";
import { diaryEntries } from '@/app/data/entries';

export default function Diary() {
    const mostRecent = diaryEntries[0];
    const olderEntries = diaryEntries.slice(0);
return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
    >

    <main className="flex flex-col p-10 bg-[#3f2745] bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:24px_24px] text-white">
  <h1 className="text-5xl font-bold text-center">Writing</h1>
  <p className="text-[#c0afe2] font-bold mt-4 text-xl text-center">Dreaming beyond reality ✍️</p>
  
  <p className="mt-8 text-center">
    Writing is one of the few things in my life that stuck. From writing about a girl traveling in a time machine in grade school, to some serious-but-not-so-serious fiction writing in junior high, to fully developing worlds with its own unique architecture in high school. 
    Now, I tend to journal often. It's the best way to explore my introspectiveness and express myself without limits.
  </p>
  <br />
  <br />
{/* Featured Entry */}
<div className="w-full">
        <h2 className="text-3xl text-center font-bold mb-6">Recent ✨</h2>
        <div className="bg-[#2a2233] border border-[#c0afe2]/30 rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold mb-2">{mostRecent.title}</h3>
          <span className="text-sm text-gray-400 block">{mostRecent.date} • {mostRecent.category}</span>
          <span className="text-sm text-gray-400 block mb-6">{mostRecent.summary}</span>
          <div className="space-y-4 text-gray-200 leading-relaxed">
            {mostRecent.content.map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <span className="text-sm text-gray-400 block mt-6">Author's Note: {mostRecent.note}</span>
        </div>
      </div>

      {/* Archive List */}
      <div className="w-full mt-16">
        <h2 className="text-3xl text-center font-bold mb-6">Archive 📚</h2>
        <div className="space-y-4">
          {olderEntries.map((entry) => (
            <Link key={entry.id} href={`/diary/${entry.id}`} className="block bg-[#261f30] hover:bg-[#32283f] border border-white/5 rounded-xl p-6 transition duration-300">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-xl font-bold">{entry.title}</h4>
                  <p className="text-sm text-gray-400 mt-1">{entry.summary}</p>
                </div>
                <span className="text-[#c0afe2] text-sm shrink-0 ml-4">Read →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <p className="mt-5 text-[#c0afe2] font-bold mt-4 text-xl text-center">And more to come... 📖</p>

</main>
</motion.div>
  );
}
