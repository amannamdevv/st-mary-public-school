import React from 'react';
import { Sparkles, Rocket, HeartHandshake } from 'lucide-react';

export default function WelcomeSection() {
  return (
    <section id="about" className="py-28 relative overflow-hidden bg-slate-50 mt-[-5px]">
      {/* Giant animated gradient background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-pulse"></div>
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-sky-300 rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-[pulse_4s_ease-in-out_infinite]"
        style={{ animationDelay: '2s' }}
      ></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid md:grid-cols-12 gap-16 items-center">
          
          {/* Left Visual Column */}
          <div className="md:col-span-5 relative group">
            {/* Magical floating aura behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-400 to-rose-400 rounded-[3rem] blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>

            <img
              className="rounded-[3rem] shadow-2xl shadow-blue-900/10 relative z-10 border-[6px] border-white transform transition-transform duration-700 group-hover:-rotate-3 group-hover:scale-[1.02] w-full object-cover"
              alt="Students of St. Mary Public School engaged in joyous reading circle"
              src="/home-welcome.png"
            />

            {/* SVG Sparkle Badge */}
            <div className="absolute -bottom-8 -right-8 bg-gradient-to-br from-yellow-400 to-amber-500 p-6 rounded-[2rem] shadow-xl z-20 hidden md:flex items-center justify-center border-4 border-white transform transition-transform duration-500 group-hover:translate-y-2 group-hover:rotate-12 w-24 h-24">
              <Sparkles className="w-12 h-12 text-white drop-shadow-md" />
            </div>
          </div>

          {/* Right Text Column */}
          <div className="md:col-span-7 bg-white/60 backdrop-blur-2xl p-10 lg:p-14 rounded-[3rem] shadow-2xl shadow-blue-900/5 border border-white relative group">
            
            {/* Decorative Vector Welcome SVG Sticker */}
            <div className="absolute -top-9 -left-9 bg-gradient-to-br from-amber-400 to-orange-500 text-white p-4 rounded-3xl shadow-xl border-4 border-white animate-[bounce_4s_infinite] origin-bottom hover:scale-110 transition-transform z-30 flex items-center justify-center">
              <HeartHandshake className="w-8 h-8 text-white drop-shadow-sm" />
            </div>

            <h2 className="font-headline text-5xl lg:text-6xl font-bold text-slate-800 mb-8 leading-tight">
              Welcome to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-yellow-500 italic">
                St. Mary!
              </span>
            </h2>

            <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
              <p>
                At St. Mary Public School, we believe that education is more than just academic achievement; it is a
                magical journey of discovery and growth. Our campus is a vibrant sanctuary of knowledge where tradition
                meets joyful innovation.
              </p>
              <p>
                We pride ourselves on creating a nurturing environment that encourages curiosity, wild imagination, and
                critical thinking. From our colorful facilities to our deeply dedicated faculty, every element of our
                institution is designed to empower your child into reaching their highest potential.
              </p>
            </div>

            <div className="mt-12 flex items-center gap-6 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-2xl border border-indigo-100/50 shadow-inner">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-indigo-600 shadow-sm border border-indigo-100 flex-shrink-0 group-hover:rotate-180 transition-transform duration-1000 cursor-default">
                <Rocket className="w-8 h-8 text-indigo-600" />
              </div>
              <span className="font-headline text-3xl text-indigo-900 font-bold drop-shadow-sm">
                Excellence in every step.
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
