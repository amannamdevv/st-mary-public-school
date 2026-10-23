import React from 'react';
import { Trophy, Medal, Award, Sparkles, Star } from 'lucide-react';

export default function RisingStarSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-100/50 rounded-full blur-[120px] -translate-x-1/4 -translate-y-1/4 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-100/50 rounded-full blur-[100px] translate-x-1/4 translate-y-1/4 animate-[pulse_5s_infinite]"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content Side */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 mb-6 group cursor-default">
              <Trophy className="w-5 h-5 text-indigo-600 animate-bounce" />
              <span className="text-sm font-bold text-indigo-700 tracking-wider uppercase">Rising Star Spotlight</span>
            </div>

            <h2 className="font-headline text-5xl lg:text-6xl font-bold text-slate-800 mb-8 leading-tight">
              Celebrating <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Sporting Excellence</span>
            </h2>

            <div className="space-y-8">
              {/* Scholarship Highlight Card */}
              <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-[2.5rem] border border-slate-200/60 shadow-xl shadow-indigo-900/5 relative group hover:-translate-y-1 transition-all duration-500">
                {/* SVG Medal Badge */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-amber-400 rounded-2xl flex items-center justify-center text-white shadow-lg rotate-12 group-hover:rotate-0 transition-transform">
                  <Medal className="w-7 h-7" />
                </div>

                <h3 className="font-headline text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                  Tribhuwan Singh Rautela
                </h3>
                <div className="space-y-4 text-slate-600 font-medium leading-relaxed">
                  <div className="flex gap-4 items-start bg-indigo-50/50 p-4 rounded-2xl border border-indigo-100/30 text-indigo-900">
                    <Award className="w-5 h-5 mt-1 text-indigo-600 shrink-0" />
                    <p>
                      Two-time recipient of the prestigious <strong className="text-indigo-900">मुख्यमंत्री उदीयमान खिलाड़ी उन्नयन योजना</strong> (Chief Minister Emerging Player Upgradation Scheme) scholarship.
                    </p>
                  </div>
                  <div className="flex gap-4 items-start bg-amber-50/50 p-4 rounded-2xl border border-amber-100/30 text-amber-900">
                    <Star className="w-5 h-5 mt-1 text-amber-600 shrink-0" />
                    <p>
                      Consistently honored as the <strong className="text-amber-900">Sports Topper</strong>, showcasing unwavering dedication and elite athletic performance over the past two years.
                    </p>
                  </div>
                </div>
              </div>

              {/* Inspirational Quote */}
              <p className="text-lg text-slate-500 italic font-medium pl-6 border-l-4 border-indigo-200">
                "Tribhuwan's remarkable consistency and spirit on the field serve as an inspiration to every student at St. Mary Public School, proving that discipline and passion lead to extraordinary achievements."
              </p>
            </div>
          </div>

          {/* Image Side */}
          <div className="order-1 lg:order-2 relative group">
            {/* Decorative Frames */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-blue-400 rounded-[3rem] rotate-3 scale-105 opacity-20 blur-xl group-hover:rotate-6 transition-transform duration-700"></div>
            <div className="absolute -inset-4 border-2 border-indigo-100 rounded-[3.5rem] rotate-1 group-hover:-rotate-1 transition-transform duration-700 pointer-events-none"></div>

            {/* Main Image */}
            <div className="relative rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl z-10 bg-slate-100">
              <img
                src="/students/tribhuwan-rautela.png"
                alt="Tribhuwan Singh Rautela receiving award"
                className="w-full h-auto transform transition-transform duration-1000 group-hover:scale-105"
              />
            </div>

            {/* Overlay badge with SVG Trophy */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white/95 backdrop-blur-md px-6 py-4 rounded-3xl shadow-2xl flex items-center gap-4 border border-indigo-100 z-30 transform hover:-translate-y-1 transition-transform cursor-default">
              <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 shadow-inner border border-amber-200/50">
                <Trophy className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <p className="text-[10px] font-bold text-amber-600 uppercase tracking-widest leading-none mb-1.5">Honored At</p>
                <p className="text-base font-bold text-slate-800 leading-none">Sports Celebration</p>
              </div>
            </div>

            {/* Floating Achievement SVG Element */}
            <div className="absolute -top-10 -left-10 w-24 h-24 bg-white rounded-3xl shadow-2xl flex flex-col items-center justify-center border border-slate-100 z-20 animate-bounce group-hover:animate-none">
              <Sparkles className="w-8 h-8 text-amber-500 mb-1" />
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wide">Excellence</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
