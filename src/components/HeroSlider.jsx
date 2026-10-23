import React, { useState, useEffect } from 'react';

const slides = [
  { src: '/gallery/School_Image_For_Hero_Section.png', alt: 'St. Mary Public School View 1' },
  { src: '/gallery/hero_enhanced_1.png', alt: 'St. Mary Public School View 2' },
  { src: '/gallery/hero_enhanced_2.png', alt: 'St. Mary Public School View 3' },
  { src: '/gallery/hero_enhanced_3.png', alt: 'St. Mary Public School View 4' },
  { src: '/gallery/hero_enhanced_4.png', alt: 'St. Mary Public School View 5' },
  { src: '/gallery/hero_enhanced_5.png', alt: 'St. Mary Public School View 6' },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative w-full aspect-video overflow-hidden bg-slate-950 shadow-2xl" id="hero-slider-section">
      {/* Images Slider */}
      <div className="absolute inset-x-0 top-0 bottom-0 z-0">
        <div id="hero-slider" className="relative w-full h-full">
          {slides.map((slide, idx) => (
            <img
              key={slide.src}
              className={`hero-slide absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                idx === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
              src={slide.src}
              alt={slide.alt}
            />
          ))}

          {/* Subtle top/bottom gradients for readability */}
          <div className="absolute inset-x-0 top-0 h-16 md:h-24 bg-gradient-to-b from-slate-950/60 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-x-0 bottom-0 h-32 md:h-48 bg-gradient-to-t from-slate-950/80 to-transparent z-10 pointer-events-none"></div>
        </div>
      </div>

      {/* Slide Navigation Dots */}
      <div className="absolute bottom-20 md:bottom-24 right-6 z-30 flex items-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all rounded-full ${
              idx === currentSlide
                ? 'w-7 h-2 bg-red-600 shadow-md'
                : 'w-2 h-2 bg-white/60 hover:bg-white'
            }`}
          />
        ))}
      </div>

      {/* Bottom Address & Motto Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20 pt-10 pb-4 md:pb-8 px-4 text-center">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* School Address */}
          <h2 className="text-white font-serif font-bold tracking-tight mb-1 md:mb-2 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] whitespace-nowrap overflow-visible text-[clamp(11px,3.8vw,36px)] w-full">
            St. Mary Public School, Phool Chaur, Nainital 263139
          </h2>

          {/* Motto */}
          <div className="flex items-center gap-2 md:gap-4 w-full justify-center opacity-95">
            <div className="h-[1px] md:h-[2px] w-6 md:w-12 bg-red-600 rounded-full hidden xs:block shrink-0"></div>
            <p className="font-headline italic text-red-400 font-bold tracking-wide drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] whitespace-nowrap text-[clamp(10px,2.5vw,24px)]">
              Anchored in learning
            </p>
            <div className="h-[1px] md:h-[2px] w-6 md:w-12 bg-red-600 rounded-full hidden xs:block shrink-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
