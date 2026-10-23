import React from 'react';
import { Trophy, Palette, Music, Scissors, Sparkles, ArrowRight } from 'lucide-react';

const activities = [
  {
    title: 'Sports',
    img: '/activities/sports_featured.png',
    icon: Trophy,
    gradient: 'from-emerald-900/90 via-emerald-900/40 to-transparent',
    hoverGradient: 'group-hover:from-emerald-800/90',
    barColor: 'bg-emerald-400',
    iconColor: 'text-emerald-400',
    rotate: 'rotate-12 group-hover:scale-125 group-hover:-rotate-12',
    offset: '',
  },
  {
    title: 'Art',
    img: '/activities/art.jpeg',
    icon: Palette,
    gradient: 'from-pink-900/90 via-pink-900/40 to-transparent',
    hoverGradient: 'group-hover:from-pink-800/90',
    barColor: 'bg-pink-400',
    iconColor: 'text-pink-400',
    rotate: '-rotate-12 group-hover:scale-125 group-hover:rotate-12',
    offset: 'mt-8 md:mt-12',
  },
  {
    title: 'Dance',
    img: '/activities/dance.jpeg',
    icon: Music,
    gradient: 'from-fuchsia-900/90 via-fuchsia-900/40 to-transparent',
    hoverGradient: 'group-hover:from-fuchsia-800/90',
    barColor: 'bg-fuchsia-400',
    iconColor: 'text-fuchsia-400',
    rotate: 'rotate-6 group-hover:scale-125 group-hover:-rotate-6',
    offset: '',
  },
  {
    title: 'Craft',
    img: '/activities/craft.jpeg',
    icon: Scissors,
    gradient: 'from-orange-900/90 via-orange-900/40 to-transparent',
    hoverGradient: 'group-hover:from-orange-800/90',
    barColor: 'bg-orange-400',
    iconColor: 'text-orange-400',
    rotate: '-rotate-6 group-hover:scale-125 group-hover:rotate-6',
    offset: 'mt-8 md:mt-12',
  },
];

export default function CreativeFocusSection() {
  return (
    <section id="activities" className="py-32 bg-slate-900 relative overflow-hidden">
      {/* Magical galaxy background blur */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-50 animate-[pulse_6s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-pink-600/20 rounded-full blur-[120px] pointer-events-none mix-blend-screen opacity-50 animate-[pulse_8s_ease-in-out_infinite]"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="w-16 h-2 bg-gradient-to-r from-pink-500 to-indigo-500 mb-6 rounded-full shadow-[0_0_15px_rgba(236,72,153,0.5)]"></div>
            <h2 className="font-headline text-5xl lg:text-6xl font-bold text-white mb-6">
              Beyond the <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-indigo-400">Classroom</span>
            </h2>
            <p className="text-xl text-slate-300 font-medium leading-relaxed">
              We fiercely believe in nurturing the wild creative spirit. Our specialized programs ensure every child discovers their inner talent.
            </p>
          </div>

          <a
            className="text-white font-bold flex items-center gap-3 group relative px-8 py-4 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all border border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] overflow-hidden shrink-0"
            href="#gallery"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-indigo-500/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
            <span className="relative z-10 text-lg">Explore Activities</span>
            <Sparkles className="w-5 h-5 text-amber-300 group-hover:rotate-12 transition-transform relative z-10" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {activities.map((act) => {
            const Icon = act.icon;
            return (
              <div
                key={act.title}
                className={`group relative aspect-[3/4] rounded-[2.5rem] overflow-hidden shadow-2xl hover:-translate-y-4 transition-transform duration-500 border border-white/10 ring-4 ring-black/20 ${act.offset}`}
              >
                <img
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                  alt={act.title}
                  src={act.img}
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${act.gradient} mix-blend-multiply ${act.hoverGradient} transition-colors`}
                ></div>

                <div className="absolute bottom-0 left-0 p-8 w-full z-10 bg-gradient-to-t from-black/80 to-transparent">
                  {/* Vector SVG Badge */}
                  <div
                    className={`absolute -top-16 right-6 p-4 rounded-2xl bg-black/40 backdrop-blur-md border border-white/20 shadow-xl ${act.iconColor} ${act.rotate} transition-transform duration-500`}
                  >
                    <Icon className="w-9 h-9" />
                  </div>
                  
                  <h3 className="text-3xl font-headline font-bold text-white mb-1">{act.title}</h3>
                  <div
                    className={`w-12 h-1.5 ${act.barColor} rounded-full group-hover:w-full transition-all duration-500 mt-2`}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
