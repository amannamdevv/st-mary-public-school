import React from 'react';
import { Sparkles, Award, BookOpen, Heart, GraduationCap } from 'lucide-react';

export default function LeadershipSection() {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative Edge Blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-rose-200/40 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/3 pointer-events-none animate-[pulse_6s_ease-in-out_infinite]"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/3 pointer-events-none animate-[pulse_8s_ease-in-out_infinite]"></div>

      {/* Floating SVG Stickers */}
      <div className="absolute top-20 right-1/4 opacity-40 rotate-12 animate-[bounce_5s_infinite] drop-shadow-md">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-400 to-rose-500 flex items-center justify-center text-white shadow-lg border border-white/50">
          <Heart className="w-7 h-7" />
        </div>
      </div>
      <div className="absolute bottom-20 left-10 opacity-40 -rotate-12 animate-[bounce_6s_infinite] drop-shadow-md">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white shadow-lg border border-white/50">
          <BookOpen className="w-8 h-8" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 relative">
          <div className="w-16 h-2 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto mb-6 rounded-full shadow-sm"></div>
          <h2 className="font-headline text-5xl lg:text-6xl font-bold text-slate-800 mb-6 tracking-tight">
            Leadership &amp; Vision
          </h2>
          <p className="text-2xl text-slate-600 italic font-headline max-w-2xl mx-auto bg-white/40 backdrop-blur-md py-4 px-8 rounded-full shadow-sm border border-white">
            "Guiding the next generation with values, discipline, and a vision for the future."
          </p>
        </div>

        {/* Top Row: Director & Manager */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          
          {/* Director Card */}
          <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-[2.5rem] p-10 shadow-xl shadow-blue-900/5 border-4 border-white relative overflow-hidden group flex flex-col h-full hover:-translate-y-2 transition-transform duration-500">
            {/* Floating quote icon */}
            <div className="absolute -top-6 -left-4 text-blue-200/50 text-8xl font-serif leading-none select-none z-0 group-hover:scale-110 transition-transform duration-500">
              "
            </div>

            <div className="flex items-center gap-6 mb-8 relative z-10">
              <div className="relative w-24 h-24 flex-shrink-0 rounded-full border-[4px] border-white shadow-md overflow-hidden flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-200 group-hover:rotate-6 transition-transform duration-500">
                <img
                  className="absolute inset-0 w-full h-full object-cover object-[50%_20%] rounded-full transition-transform duration-700 group-hover:scale-[1.05] relative z-10"
                  src="/leadership/director.png"
                  alt="Mr. Pritam Singh Bisht - Director"
                />
                <div className="absolute inset-1 rounded-full border-2 border-white/50 border-dashed animate-[spin_20s_linear_infinite] pointer-events-none z-0"></div>
              </div>
              <div>
                <h3 className="font-headline text-2xl font-bold text-slate-800 mb-1">Mr. Pritam Singh Bisht</h3>
                <p className="text-blue-600 font-extrabold tracking-widest uppercase text-xs bg-blue-100/50 px-3 py-1 rounded-full inline-block shadow-sm">
                  Director
                </p>
              </div>
            </div>

            <div className="flex-grow relative z-10">
              <p className="text-[1.05rem] text-slate-600 leading-relaxed font-medium">
                In today's time, when education is often seen merely as a business, we believe in making education
                simple, accessible, affordable, and a true responsibility. Our aim is to ensure that every child
                receives quality education and builds a bright future with strong moral values.
              </p>
            </div>
          </div>

          {/* Manager Card */}
          <div className="bg-gradient-to-br from-teal-50 via-white to-emerald-50 rounded-[2.5rem] p-10 shadow-xl shadow-teal-900/5 border-4 border-white relative overflow-hidden group flex flex-col h-full hover:-translate-y-2 transition-transform duration-500">
            {/* Floating quote icon */}
            <div className="absolute -top-6 -left-4 text-teal-200/50 text-8xl font-serif leading-none select-none z-0 group-hover:scale-110 transition-transform duration-500">
              "
            </div>

            <div className="flex items-center gap-6 mb-8 relative z-10">
              <div className="relative w-24 h-24 flex-shrink-0 rounded-full border-[4px] border-white shadow-md overflow-hidden flex items-center justify-center bg-gradient-to-br from-teal-100 to-emerald-200 group-hover:rotate-6 transition-transform duration-500">
                <img
                  className="absolute inset-0 w-full h-full object-cover object-[50%_5%] rounded-full transition-transform duration-700 group-hover:scale-[1.05] relative z-10"
                  src="/leadership/manager.png"
                  alt="Mr. Kamal Singh Bisht - Manager"
                />
                <div className="absolute inset-1 rounded-full border-2 border-white/50 border-dashed animate-[spin_20s_linear_infinite] pointer-events-none z-0"></div>
              </div>
              <div>
                <h3 className="font-headline text-2xl font-bold text-slate-800 mb-1">Mr. Kamal Singh Bisht</h3>
                <p className="text-teal-600 font-extrabold tracking-widest uppercase text-xs bg-teal-100/50 px-3 py-1 rounded-full inline-block shadow-sm">
                  Manager
                </p>
              </div>
            </div>

            <div className="flex-grow relative z-10">
              <p className="text-[1.05rem] text-slate-600 leading-relaxed font-medium">
                Our goal is to provide quality education to students and to develop moral values and discipline in them.
                We are committed to creating an environment where every child can recognize their potential and achieve
                success in life.
              </p>
            </div>
          </div>

        </div>

        {/* Principal's Message Card */}
        <div className="bg-gradient-to-br from-rose-50 via-white to-purple-50 rounded-[3rem] p-10 md:p-16 shadow-2xl shadow-purple-900/10 flex flex-col md:flex-row gap-16 items-center border-4 border-white relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500">
          
          {/* Profile Photo */}
          <div className="flex-shrink-0 flex flex-col items-center text-center max-w-[280px] relative z-10 mx-auto md:mx-0">
            <div className="relative w-56 h-56 rounded-full border-8 border-white shadow-xl overflow-hidden mb-8 flex items-center justify-center bg-gradient-to-br from-pink-100 to-rose-200 transition-transform duration-700 hover:scale-[1.03] group-hover:rotate-3">
              <div className="absolute inset-3 rounded-full border-[3px] border-white/50 border-dashed animate-[spin_20s_linear_infinite] z-0 pointer-events-none"></div>
              <img
                className="absolute inset-0 w-full h-full object-cover object-[50%_30%]"
                src="/leadership/principal.png"
                alt="Mrs. Champa Bisht - Principal"
              />
              {/* SVG Floating Accent Stickers */}
              <div className="absolute top-4 right-4 bg-white/90 p-2 rounded-full shadow-md text-amber-500 z-20">
                <Sparkles className="w-5 h-5 text-amber-500" />
              </div>
              <div className="absolute bottom-4 left-4 bg-rose-500 p-2 rounded-full shadow-md text-white -rotate-12 z-20">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
            </div>
            <h3 className="font-headline text-3xl font-bold text-slate-800 mb-2">Mrs. Champa Bisht</h3>
            <p className="text-rose-500 font-extrabold tracking-widest uppercase text-sm mb-6 bg-rose-100 px-4 py-1.5 rounded-full inline-block">
              Principal
            </p>
          </div>

          {/* Right Content Column */}
          <div className="flex-1 relative z-10 pl-0 md:pl-8 md:border-l-[3px] border-rose-100/50">
            <div className="absolute -top-12 -left-8 text-rose-200 text-9xl font-serif leading-none select-none opacity-40 z-0 group-hover:scale-110 transition-transform">
              "
            </div>
            <div className="space-y-6 text-[1.1rem] text-slate-600 leading-relaxed font-medium relative z-10">
              <p className="first-letter:text-7xl first-letter:font-headline first-letter:font-bold first-letter:text-rose-500 first-letter:mr-3 first-letter:mt-1 first-letter:float-left first-line:tracking-wide">
                A warm welcome to our school family! Our aim is not only to provide academic knowledge to our
                students but also to instill profound moral values, unwavering discipline, and help them become radiant,
                successful individuals in life.
              </p>
              <p>
                We believe that every child has unlimited potential to succeed. With proper
                guidance, unconditional encouragement, and a joyful, positive environment, we strive to ensure their
                magnificent, all-round development.
              </p>
              <p>
                Along with academics, we equally focus on deep-rooted values, thrilling sports, mesmerizing art,
                expressive dance, and creative crafts, ensuring that our students bloom into confident, highly
                responsible, and brilliant individuals.
              </p>
              <p>
                With the beautiful cooperation of parents and teachers, we can achieve this magnificent goal. Let us all
                work hand-in-hand to build an incredibly bright future for our children!
              </p>
            </div>

            {/* Classic Right-Aligned Signature Block */}
            <div className="mt-12 pt-8 border-t-[3px] border-rose-100/50 flex flex-col items-end text-right relative">
              <div className="text-rose-600 font-bold text-xl mb-6 bg-rose-50 px-6 py-2 rounded-2xl border border-rose-100 shadow-sm flex items-center gap-2">
                <Award className="w-5 h-5 text-rose-500 inline" />
                <span>Thank you for your support and trust.</span>
              </div>
              <p className="font-headline italic text-4xl text-purple-800 mb-3 font-bold">Sincerely,</p>
              <p className="font-headline font-bold text-3xl text-slate-800 mb-1">Mrs. Champa Bisht</p>
              <p className="text-rose-500 font-extrabold uppercase tracking-widest text-xs mb-2">Principal</p>
              <p className="font-serif italic text-sm text-slate-500 font-semibold">(St. Mary Public School)</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
