import React from 'react';
import { Anchor, Sparkles } from 'lucide-react';

export default function MottoPlaqueSection() {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Glowing magical aura */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] bg-gradient-to-tr from-rose-500/20 to-purple-600/20 rounded-full blur-[120px] mix-blend-multiply opacity-60 animate-[pulse_6s_ease-in-out_infinite]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-8 relative z-10">
        <div className="bg-white/40 backdrop-blur-2xl rounded-[3rem] p-16 md:p-24 relative overflow-hidden text-center shadow-2xl shadow-rose-900/10 border border-white group transition-transform duration-700 hover:-translate-y-2">
          {/* Luminous edge */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-rose-400 via-purple-400 to-indigo-400 opacity-80"></div>

          <div className="relative z-10">
            {/* Vector SVG Anchor Sticker Badge */}
            <div className="inline-block relative mb-12">
              <div className="absolute inset-0 bg-rose-400 rounded-full blur-2xl opacity-40 group-hover:scale-150 transition-transform duration-700"></div>
              <div className="relative z-10 w-28 h-28 mx-auto rounded-3xl bg-gradient-to-br from-rose-500 to-red-600 border-4 border-white shadow-2xl flex items-center justify-center text-white group-hover:-rotate-12 transition-transform duration-500">
                <Anchor className="w-16 h-16 text-white drop-shadow-md" />
              </div>
            </div>

            <h2 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight mb-4 drop-shadow-sm">
              "Education is the most powerful magical tool which you can use to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-purple-600">
                change the world.
              </span>
              "
            </h2>

            <div className="mt-8 md:mt-12 flex items-center justify-center gap-3 md:gap-6 bg-white/60 px-6 md:px-8 py-3 rounded-full shadow-sm border border-white/50 w-fit mx-auto">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span className="font-headline text-lg md:text-xl font-bold text-slate-700 uppercase tracking-widest text-center">
                Our Guiding Principle
              </span>
              <Sparkles className="w-5 h-5 text-amber-500" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
