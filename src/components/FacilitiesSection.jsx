import React from 'react';
import {
  GraduationCap,
  Rocket,
  HeartHandshake,
  Laptop,
  Video,
  Puzzle,
  Trophy,
  Bus,
} from 'lucide-react';

const facilities = [
  {
    icon: GraduationCap,
    title: 'Experienced & High Qualified Staff',
    desc: 'Dedicated educators committed to guiding every student with love and excellence.',
    bg: 'from-orange-50 to-orange-100',
    border: 'border-orange-200',
    text: 'text-orange-950',
    subText: 'text-orange-800/80',
    iconColor: 'text-orange-600',
    blob: 'bg-orange-300',
    iconBorder: 'border-orange-100',
    rotate: 'group-hover:rotate-6',
  },
  {
    icon: Rocket,
    title: 'Basic Skill Development',
    desc: 'Focusing on foundational skills that build incredible lifelong learners.',
    bg: 'from-blue-50 to-blue-100',
    border: 'border-blue-200',
    text: 'text-blue-950',
    subText: 'text-blue-800/80',
    iconColor: 'text-blue-600',
    blob: 'bg-blue-300',
    iconBorder: 'border-blue-100',
    rotate: 'group-hover:rotate-6',
  },
  {
    icon: HeartHandshake,
    title: 'Safe & Kids Friendly Environment',
    desc: 'A highly secure, warm, and wonderfully welcoming campus for all age groups.',
    bg: 'from-pink-50 to-pink-100',
    border: 'border-pink-200',
    text: 'text-pink-950',
    subText: 'text-pink-800/80',
    iconColor: 'text-pink-600',
    blob: 'bg-pink-300',
    iconBorder: 'border-pink-100',
    rotate: 'group-hover:-rotate-6',
  },
  {
    icon: Laptop,
    title: 'Furnished Computer Lab & Library',
    desc: 'Modern tech and vast book collections to spark endless curiosity.',
    bg: 'from-emerald-50 to-emerald-100',
    border: 'border-emerald-200',
    text: 'text-emerald-950',
    subText: 'text-emerald-800/80',
    iconColor: 'text-emerald-600',
    blob: 'bg-emerald-300',
    iconBorder: 'border-emerald-100',
    rotate: 'group-hover:-rotate-6',
  },
  {
    icon: Video,
    title: 'CCTV Camera',
    desc: '24/7 campus-wide vigilance ensuring uncompromised student safety.',
    bg: 'from-red-50 to-red-100',
    border: 'border-red-200',
    text: 'text-red-950',
    subText: 'text-red-800/80',
    iconColor: 'text-red-600',
    blob: 'bg-red-300',
    iconBorder: 'border-red-100',
    rotate: 'group-hover:-rotate-12',
  },
  {
    icon: Puzzle,
    title: 'Toys and Puzzles',
    desc: 'Interactive educational toys for sensory and brilliant cognitive development.',
    bg: 'from-amber-50 to-amber-100',
    border: 'border-amber-200',
    text: 'text-amber-950',
    subText: 'text-amber-800/80',
    iconColor: 'text-amber-600',
    blob: 'bg-amber-300',
    iconBorder: 'border-amber-100',
    rotate: 'group-hover:rotate-[15deg]',
  },
  {
    icon: Trophy,
    title: 'Indoor & Outdoor Games Facilities',
    desc: 'Spacious play areas equipped for a wide variety of physical activities, promoting fitness and joy.',
    bg: 'from-fuchsia-50 to-fuchsia-100',
    border: 'border-fuchsia-200',
    text: 'text-fuchsia-950',
    subText: 'text-fuchsia-800/80',
    iconColor: 'text-fuchsia-600',
    blob: 'bg-fuchsia-300',
    iconBorder: 'border-fuchsia-100',
    rotate: 'group-hover:-rotate-[10deg]',
  },
  {
    icon: Bus,
    title: 'Safe Transport & Convenience',
    desc: 'Secure and supervised bus services across all major routes, ensuring a safe and comfortable daily commute.',
    bg: 'from-indigo-50 to-indigo-100',
    border: 'border-indigo-200',
    text: 'text-indigo-950',
    subText: 'text-indigo-800/80',
    iconColor: 'text-indigo-600',
    blob: 'bg-indigo-300',
    iconBorder: 'border-indigo-100',
    rotate: 'group-hover:rotate-12',
  },
];

export default function FacilitiesSection() {
  return (
    <section id="facilities" className="py-24 bg-surface-container-low relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-200/30 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-200/30 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-16 relative">
          <div className="w-20 h-2 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-6 rounded-full shadow-sm"></div>
          <h2 className="font-headline text-5xl md:text-6xl font-bold text-slate-800 mb-6 tracking-tight">
            Our Facilities
          </h2>
          <p className="text-slate-600 font-medium text-xl max-w-2xl mx-auto">
            Providing a safe, inspiring, and comprehensively equipped environment for your child's ultimate holistic development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {facilities.map((f) => {
            const Icon = f.icon;
            return (
              <div
                key={f.title}
                className={`bg-gradient-to-br ${f.bg} rounded-[2.5rem] p-8 border-2 ${f.border} hover:shadow-2xl hover:-translate-y-3 hover:scale-[1.02] transition-all group duration-500 relative overflow-hidden flex flex-col justify-between`}
              >
                <div className={`absolute top-0 right-0 w-40 h-40 ${f.blob} rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 opacity-30 group-hover:opacity-70 transition-opacity duration-500`}></div>
                
                <div>
                  <div className={`w-24 h-24 bg-white border-4 ${f.iconBorder} rounded-[2rem] flex items-center justify-center mb-6 group-hover:scale-110 ${f.rotate} transition-transform duration-500 relative z-10 shadow-lg ${f.iconColor}`}>
                    <Icon className="w-12 h-12 drop-shadow-md group-hover:-translate-y-1 transition-transform duration-500" />
                  </div>
                  <h3 className={`font-headline font-bold text-2xl ${f.text} leading-tight mb-3 relative z-10`}>
                    {f.title}
                  </h3>
                </div>

                <p className={`text-base font-medium ${f.subText} relative z-10 leading-relaxed`}>
                  {f.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
