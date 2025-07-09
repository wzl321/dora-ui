import { motion } from 'framer-motion';

export default function App() {
  const address = "2qEHjDLDLbuBgRYvsxhc5D6uDWAivNFZGan56P1tpump";

  const handleCopy = () => {
    navigator.clipboard.writeText(address);
    alert("Address copied!");
  };

  return (
    <main className="min-h-screen bg-black text-white px-6 py-12 flex flex-col items-center justify-center text-center space-y-10">
      <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-3xl md:text-5xl font-bold max-w-3xl">
        Women hold up half the sky.
      </motion.h1>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="space-y-6 max-w-2xl text-gray-300 text-sm md:text-base leading-relaxed">
        <p>She wasn’t born strong — she became strong by never surrendering. To the world, it may look like she’s already living the “ideal life.” But she knows — that version of life was never meant for her. She's not here to fit in. She’s here to rewrite the rules.</p>
        <p>She said：We’re paving a path for other women to stand bold in the blockchain space. And we’re just getting started.</p>
        <p>She crushed every voice that whispered, “Just leave the women alone,” beneath her feet. Not because she was born strong — but because every time she was scolded, abandoned, or beaten down, she chose to rise again. Every single time.</p>
        <p>Time may forget names, but spirit always leaves a spark behind.</p>
        <p>In the ever-accelerating world of Web3, too many memories are lost in the noise. But the spirit of refusing to bow to fate — of never letting others define your worth — that must never be forgotten.</p>
        <p>This is why Dora was born. Not as another version of her — but as the embodiment of her transformation. A woman once dismissed, who kept moving forward through every storm. A voice that rose from silence, gathering strength to declare: “I refuse to give in.”</p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-4">
        <a href="#" className="bg-white text-black font-bold px-6 py-2 rounded-full hover:bg-gray-200 transition">buy $DORA</a>
        <button onClick={handleCopy} className="border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">Copy CA</button>
      </div>

      <div className="text-sm text-gray-400 mt-6">
        <p>Supply: 1,000,000,000 BNB Chain | LP: Fourmeme</p>
        <p>CA: {address}</p>
      </div>

      <div className="flex gap-4 mt-4 text-sm">
        <span>DEX Screener</span>
        <span>BNB Chain</span>
        <span>X (Twitter)</span>
        <span>Telegram</span>
      </div>
    </main>
  );
}
