"use client";
import Link from 'next/link';
import { motion } from "framer-motion";

export default function hips() {
return (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
    >

    <main className="flex flex-col p-10 bg-[#3f2745] bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:24px_24px] text-white">
  <h1 className="text-5xl font-bold text-center">The World Ended 5 Years Ago 🪦 (1)</h1>
  <p className="text-[#c0afe2] font-bold mt-4 text-xl text-center">November 2025 · Short Stories</p>
  <p className="text-center">How long do you live a lie for it to become reality? Is there a line that defines when a lie becomes the truth, or is it blurred? Most importantly, if no one can tell the lie apart from the truth, then what difference does it truly make?</p>
  <div className="bg-[#2a2233] border border-[#c0afe2]/30 rounded-2xl p-8 shadow-xl mt-8">
  <p>Day -3: December 22
  <br />The cabin’s warmth was hard to accept. I found myself pondering whether any of this will actually be worth it that night. I didn’t let that cloud my consciousness though. I just kept telling myself all this will be over in two days. That none of these past five years will mean anything when I return to the agency. Though oddly enough, I remember my last conversation with her. Perhaps it wasn’t the last, but it was the last I could recall.
  <br /><br />“Evie,” it’s her voice ringing in my head again. “Why do people cry?“
  <br /><br />I remarked quickly, “An odd question coming from you.”
  <br /><br />Ana huffed, letting out a humorous breath. “Love.” She looked at me—more intently this time. “People cry for love. For those they love deeply.”
  <br /><br />I studied her for a quiet beat, then drew in a deep breath. “I don’t think any of us can love though. Not in a life we don’t choose for ourselves.”
  <br /><br />She didn’t respond and threw a hand warmer packet at me instead. I barely caught it with my frozen fingers. I remember still, sitting under the stars in a silence that stretched for what felt like an eternity, I had suddenly begun to feel a sense of nostalgia that didn’t quite belong to myself. 
  <br /><br />“In another world that taught us how to love,” she suddenly said, “to be loved, we were something more. Something unbounded by time and space, unbreakable under the relentless weight of becoming.”
  <br /><br />I had let myself chuckle at those very words back then, saying, “What? Is the world ending tomorrow?” But thinking back, perhaps she’d always known my intent since that day five years ago.
  <br /><br />“No,” she sighed quietly. “Though, for us, I think it ended long ago.”
  <br /><br />I wasn't sure if she said that. If she did, I almost didn’t hear it. So I pretended like I didn’t and shoved the hand warmer into my coat pocket. 
  <br /><br />Day -2: December 23
  <br />“Where are you headed,” I asked that morning. “The sun’s not even up yet.”
  <br /><br />Ana turned and looked almost a little shocked to see me awake. “I’m out to get some food for the camp,” she had explained. “Our storage is running low—the kids are starving in this already freezing weather.”
  <br /><br />I had wanted to argue otherwise, but her hand was already on the rifle. We had planned to save the last bit of ammo in case the agency decided to attack. Why waste it now? Plus, had Clarc not gone out the day before for food? Where did all those rations go? It’s what I was going to say before Ana showed me the storage unit. Barren and fruitless was really the only way to describe it. Clarc must’ve had no luck to come back empty-handed.
  <br /><br />She grabbed my hand, our icy fingers interlocking. “Evie, I know you’re worried. Scared even, it’s a lot of pressure, I know.”
  <br /><br />But I didn’t know. She was the one under the most pressure as commander. Her words still make no sense to me. 
  <br /><br />“But hold your head high. You’re Miss Rosenberg. That’s a title to be proud of.” She smiled her usual smile, a little less graceful and energetic than usual, but it’s her nonetheless. If only I knew what that meant. Evie Rosenberg was just the identity I went by while undercover.
  <br /><br />“Ana,” I said. None of this will matter. None of it will. Tomorrow, when the agency attacks—when I have to kill you—none of this will matter to you. That’s what I wish I could’ve told her. The agency says saying too much would get us killed on any mission. But that day, everything left unsaid killed me inside.
  <br /><br />“I’ll go with you,” I say. I remember we got food that day. No one at camp went hungry.
  <br /><br />Day -1:  December 24
  <br />From the night we met in those woods, our relationship was bound to break. I was a spy sent to infiltrate and eventually exterminate her camp. I was tasked with gaining her trust, getting close, and killing her. She, the people’s commander, never saw less of me.
  <br /><br />When Ana and I got back to camp, everyone was a mess. I recall the children’s whines and cries, the screams and wails of grown ass men and women—what had all the commotion been about? Perhaps the gunshot wound on the food scared them, but I had properly cleaned and cooked everything. I know I had.
  <br /><br />But amongst the crowd of ungrateful rats, I had noticed Ana was missing. “Where’s Ana?” It started as whispers, probably loud enough for only myself to hear in that chaos. “Where’s Ana?!” It turns into yelling, screaming, and fighting. “Where is she?! She was just with me!” But no one answered my cries.
  <br /><br />I ran. I ran to the commander’s cabin, the one I knew every inch of because it’s the place I’m most familiar with in this camp she calls home. 
  <br /><br />I kept calling her name. I called until my voice bled as I weaved through the camp, knowing each and every corner as if I actually belonged there with the rest of them. I only stop when I trip over an extrusion piercing through the ground. It’s a tombstone. Two lonely flowers, wilted and gloomy, lay at the base. 
  <br /><br />The poorly made burial is dedicated to Clarc Lynn. He went missing December 22 while out searching for rations. He was presumed dead soon after. His body was never found.
        </p>
  </div>
  <br />
    
  <p className="text-[#c0afe2] font-bold mt-4 text-xl text-center">Author's Note</p>
  <p className="text-center">I styled this short story similar to entries. The first person POV choice was intentional to allow me to write an unreliable narrator. There are many details sprinkled throughout the story (with some more in part 2) to try and convey what had actually happened to Evie and the rebel camp.</p>
</main>
</motion.div>
  );
}
