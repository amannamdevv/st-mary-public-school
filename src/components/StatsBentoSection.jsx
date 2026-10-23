import React from 'react';
import {
  Trophy,
  Medal,
  Award,
  GraduationCap,
  Sparkles,
  Rocket,
  ShieldCheck,
  Sprout,
  Heart,
  Smile,
  PhoneCall,
  Users,
  Backpack,
} from 'lucide-react';

const toppers = [
  { name: 'Priyansh Kanwal', score: '99%', img: '/toppers/Priyansh_Kanwal_99.jpeg', bg: 'bg-rose-50', border: 'border-rose-100', text: 'text-rose-600', imgBorder: 'border-rose-200' },
  { name: 'Aayush Adhikari', score: '98%', img: '/toppers/Aayush_Adhikari_98.jpeg', bg: 'bg-blue-50', border: 'border-blue-100', text: 'text-blue-600', imgBorder: 'border-blue-200' },
  { name: 'Divyanshi', score: '98%', img: '/toppers/Divyanshi_98.jpeg', bg: 'bg-purple-50', border: 'border-purple-100', text: 'text-purple-600', imgBorder: 'border-purple-200' },
  { name: 'Himanshi', score: '98%', img: '/toppers/Himanshi_98.jpeg', bg: 'bg-emerald-50', border: 'border-emerald-100', text: 'text-emerald-600', imgBorder: 'border-emerald-200' },
  { name: 'Saranya Adhikari', score: '98%', img: '/toppers/Saranya_Adhikari_98.jpeg', bg: 'bg-amber-50', border: 'border-amber-100', text: 'text-amber-600', imgBorder: 'border-amber-200' },
  { name: 'Himani Tiwari', score: '97%', img: '/toppers/Himani_Tiwari_97.jpeg', bg: 'bg-cyan-50', border: 'border-cyan-100', text: 'text-cyan-600', imgBorder: 'border-cyan-200' },
  { name: 'Neema', score: '97%', img: '/toppers/Neema_97_.jpeg', bg: 'bg-fuchsia-50', border: 'border-fuchsia-100', text: 'text-fuchsia-600', imgBorder: 'border-fuchsia-200' },
];

export default function StatsBentoSection() {
  return (
    <section id="academics" className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Floating vector SVG stickers */}
      <div className="absolute top-10 left-20 opacity-40 animate-[bounce_5s_infinite] drop-shadow-md">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-blue-500 text-white flex items-center justify-center shadow-lg">
          <Rocket className="w-6 h-6" />
        </div>
      </div>
      <div className="absolute bottom-20 right-20 opacity-40 animate-[pulse_4s_infinite] drop-shadow-md">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 text-white flex items-center justify-center shadow-lg">
          <Sparkles className="w-7 h-7" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

          {/* Academic Excellence: Toppers Wall of Fame */}
          <div className="md:col-span-4 rounded-[3rem] bg-white border border-slate-100 p-8 shadow-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-rose-50 rounded-full blur-[60px] opacity-70 pointer-events-none"></div>
            
            {/* Background large SVG vector illustration */}
            <div className="absolute -right-12 -bottom-16 opacity-[0.06] rotate-12 group-hover:scale-[1.1] group-hover:rotate-0 transition-transform duration-700 pointer-events-none">
              <GraduationCap className="w-[320px] h-[320px] text-slate-900" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-500 shadow-sm animate-bounce">
                  <Trophy className="w-6 h-6 text-amber-500" />
                </div>
                <h3 className="font-headline text-3xl font-bold text-slate-800">
                  Wall of <span className="text-rose-600">Fame</span>
                </h3>
              </div>

              {/* Toppers Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4">
                {toppers.map((t) => (
                  <div key={t.name} className={`${t.bg} rounded-2xl p-4 border ${t.border} text-center group/card hover:scale-105 transition-all shadow-sm`}>
                    <div className={`w-16 h-16 bg-white rounded-full mx-auto mb-3 shadow-md border-2 ${t.imgBorder} overflow-hidden`}>
                      <img src={t.img} className="w-full h-full object-cover object-top" alt={t.name} />
                    </div>
                    <div className="flex items-center justify-center gap-1 mb-1">
                      <Medal className={`w-3.5 h-3.5 ${t.text}`} />
                      <p className={`text-[10px] font-bold ${t.text} uppercase tracking-widest`}>{t.score} Achiever</p>
                    </div>
                    <p className="font-headline font-bold text-slate-800 text-sm leading-tight">{t.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Happy Growing Students */}
          <div
            className="md:col-span-2 rounded-[3rem] p-10 flex flex-col justify-between text-white overflow-hidden relative group hover:-translate-y-2 hover:shadow-2xl shadow-blue-900/10 transition-all duration-500 border border-blue-400/20"
            style={{ background: 'linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%)' }}
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-80 transition-opacity duration-700"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500 rounded-full blur-[60px] translate-y-1/2 -translate-x-1/4 opacity-40"></div>
            
            <div className="relative z-10 h-full flex flex-col justify-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center mb-8 border border-white/30 shadow-inner group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 text-white">
                <GraduationCap className="w-9 h-9 text-white drop-shadow-md" />
              </div>
              <h3 className="text-7xl font-headline font-extrabold mb-3 tracking-tight drop-shadow-md">Many</h3>
              <p className="text-xl text-blue-100 max-w-sm leading-relaxed font-medium mt-auto">
                Growing Happy Students forming a close-knit, collaborative community of joyful learners.
              </p>
            </div>
          </div>

          {/* Play to 8 */}
          <div
            className="md:col-span-2 rounded-[3rem] p-10 flex flex-col justify-center text-white text-center relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl shadow-rose-900/10 transition-all duration-500 border border-rose-400/20"
            style={{ background: 'linear-gradient(135deg, #e11d48 0%, #fb7185 100%)' }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-orange-400 rounded-full blur-[50px] opacity-50 group-hover:bg-yellow-300 transition-colors duration-700"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-xl rounded-[2rem] flex items-center justify-center mb-6 border border-white/30 shadow-inner group-hover:scale-110 transition-transform duration-500 text-white">
                <Smile className="w-11 h-11 text-white drop-shadow-xl group-hover:-translate-y-1 transition-transform duration-500" />
              </div>
              <h3 className="text-4xl font-headline font-bold mb-3 tracking-tight drop-shadow-md">Play to 8</h3>
              <p className="text-lg text-rose-100 leading-snug font-medium">
                Seamless academic progression from foundational years.
              </p>
            </div>
          </div>

          {/* Affiliation */}
          <div className="md:col-span-3 bg-gradient-to-br from-amber-50 to-orange-50 rounded-[3rem] p-10 flex flex-col justify-center border-2 border-amber-100 relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl shadow-amber-900/10 transition-all duration-500">
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-amber-200 rounded-full blur-[40px] opacity-40 group-hover:opacity-80 transition-opacity duration-700"></div>
            <div className="relative z-10">
              <div className="flex items-center gap-5 mb-6">
                <div className="w-16 h-16 rounded-[2rem] bg-white flex items-center justify-center border border-amber-200 shadow-md group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 text-amber-500">
                  <ShieldCheck className="w-8 h-8 text-amber-500 drop-shadow-sm" />
                </div>
                <span className="font-bold text-amber-500 tracking-widest text-sm uppercase bg-amber-100/50 px-3 py-1 rounded-full">
                  Affiliation
                </span>
              </div>
              <p className="text-slate-600 font-medium text-lg leading-relaxed">
                Recognized by <strong className="text-slate-800">Uttarakhand Board Of Education</strong>
              </p>
              <p className="text-sm text-slate-400 font-bold mt-2">(No: 9066-67/2019-20)</p>
            </div>
          </div>

          {/* Holistic Focus */}
          <div className="md:col-span-1 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-[3rem] p-10 border-2 border-emerald-100 relative overflow-hidden group hover:-translate-y-2 hover:shadow-2xl shadow-emerald-900/10 transition-all duration-500">
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-200 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 opacity-40 group-hover:opacity-80 transition-opacity duration-700"></div>
            <div className="relative z-10 flex flex-col h-full justify-center">
              <div className="w-16 h-16 bg-white rounded-[2rem] flex items-center justify-center mb-6 border border-emerald-200 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500 shadow-md text-emerald-600">
                <Sprout className="w-8 h-8 text-emerald-600 drop-shadow-sm" />
              </div>
              <h4 className="font-headline text-3xl font-bold mb-3 text-emerald-900 leading-tight">Holistic Focus</h4>
              <p className="text-base text-teal-700 font-medium leading-relaxed">
                Balancing core academics with emotional intelligence &amp; life skills.
              </p>
            </div>
          </div>

          {/* Join our growing family */}
          <div className="md:col-span-4 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 rounded-[3rem] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 border-2 border-indigo-100 relative overflow-hidden group hover:shadow-2xl shadow-indigo-900/10 transition-all duration-500 hover:-translate-y-1">
            <div className="absolute top-0 right-0 w-80 h-80 bg-purple-200 rounded-full blur-[80px] opacity-40 -translate-y-1/2 translate-x-1/2 group-hover:opacity-70 transition-opacity duration-700 animate-[pulse_6s_ease-in-out_infinite]"></div>
            
            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              {/* Vector SVG Avatar Badges */}
              <div className="flex -space-x-4 flex-shrink-0">
                <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden bg-gradient-to-tr from-indigo-500 to-purple-500 text-white shadow-lg transform transition-transform group-hover:-translate-y-2 duration-300 delay-75 hover:z-10 hover:scale-110 flex items-center justify-center">
                  <Smile className="w-8 h-8 text-white" />
                </div>
                <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden bg-gradient-to-tr from-blue-500 to-cyan-500 text-white shadow-lg transform transition-transform group-hover:-translate-y-2 duration-300 delay-100 hover:z-10 hover:scale-110 flex items-center justify-center">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden bg-gradient-to-tr from-rose-500 to-pink-500 text-white shadow-lg transform transition-transform group-hover:-translate-y-2 duration-300 delay-150 hover:z-10 hover:scale-110 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div className="w-16 h-16 rounded-full border-4 border-white overflow-hidden bg-gradient-to-br from-yellow-300 to-amber-400 text-amber-900 flex items-center justify-center shadow-lg transform transition-transform group-hover:-translate-y-2 duration-300 delay-200 hover:z-10 hover:scale-110 group/sparkle">
                  <Sparkles className="w-7 h-7 text-amber-900 group-hover/sparkle:rotate-180 transition-transform duration-500" />
                </div>
              </div>
              
              <div>
                <h4 className="font-headline text-3xl font-bold text-indigo-950 mb-2">Join our growing family</h4>
                <p className="text-lg text-indigo-800 font-medium">
                  Reach out today to learn more about our academic programs and admission process.
                </p>
              </div>
            </div>

            <div className="relative z-10 mt-6 md:mt-0 flex-shrink-0">
              <a
                href="tel:+918077774324"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 shadow-xl shadow-indigo-600/30 group/btn border border-indigo-400/50"
              >
                Enquire Now
                <PhoneCall className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
