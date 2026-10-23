import React, { useState, useEffect } from 'react';

export default function Navbar({ onOpenWaModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className="docked full-width top-0 sticky z-[100] bg-white/95 backdrop-blur-xl border-b-2 border-blue-900/10 shadow-sm transition-all duration-300">
        <div className="flex justify-between items-center w-full px-3 min-[400px]:px-5 md:px-8 py-3 md:py-4 max-w-7xl mx-auto relative z-[110]">

          {/* Brand Logo & Name */}
          <a href="/" id="nav-brand-container" className="flex items-center gap-1.5 md:gap-3 shrink-1 min-w-0">
            <img
              src="/logo.png"
              alt="St. Mary Public School Logo"
              className="h-8 w-8 min-[400px]:h-10 min-[400px]:w-10 md:h-12 md:w-12 object-contain shadow-sm rounded-full bg-white shrink-0"
              draggable="false"
              style={{ WebkitUserDrag: 'none', userSelect: 'none' }}
            />
            <span className="text-[12px] min-[360px]:text-[13.5px] min-[400px]:text-[16px] sm:text-xl md:text-2xl font-serif font-bold text-red-700 tracking-tight leading-tight whitespace-nowrap">
              St. Mary Public School
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div id="desktop-nav-links" className="hidden lg:flex items-center space-x-8 px-6 transition-opacity duration-300">
            <a className="text-red-700 border-b-2 border-red-700 pb-1 font-body font-bold text-[15px] tracking-wide" href="#hero-slider-section">Home</a>
            <a className="text-blue-900 hover:text-red-700 transition-colors font-body font-bold text-[15px] tracking-wide relative group" href="#about">
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 transition-all group-hover:w-full"></span>
            </a>
            <a className="text-blue-900 hover:text-red-700 transition-colors font-body font-bold text-[15px] tracking-wide relative group" href="#academics">
              Academics
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 transition-all group-hover:w-full"></span>
            </a>
            <a className="text-blue-900 hover:text-red-700 transition-colors font-body font-bold text-[15px] tracking-wide relative group" href="#activities">
              Activities
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 transition-all group-hover:w-full"></span>
            </a>
            <a className="text-blue-900 hover:text-red-700 transition-colors font-body font-bold text-[15px] tracking-wide relative group" href="#facilities">
              Facilities
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 transition-all group-hover:w-full"></span>
            </a>
            <a className="text-blue-900 hover:text-red-700 transition-colors font-body font-bold text-[15px] tracking-wide relative group" href="#gallery">
              Gallery
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 transition-all group-hover:w-full"></span>
            </a>
            <a className="text-blue-900 hover:text-red-700 transition-colors font-body font-bold text-[15px] tracking-wide relative group" href="#contact">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-700 transition-all group-hover:w-full"></span>
            </a>
          </div>

          {/* Action Call & Mobile Hamburger */}
          <div id="nav-actions-container" className="flex items-center gap-2 sm:gap-4 shrink-0">
            <a
              href="tel:+918077774324"
              className="flex bg-primary text-white p-2 min-[400px]:p-2.5 sm:px-6 sm:py-2.5 rounded-full sm:rounded-xl font-bold hover:bg-red-700 transition-all transform hover:-translate-y-0.5 shadow-md hover:shadow-lg hover:shadow-primary/30 items-center justify-center gap-2 whitespace-nowrap text-sm tracking-wider uppercase group shrink-0"
            >
              <span className="material-symbols-outlined text-[20px] transition-transform group-hover:rotate-12" style={{ fontVariationSettings: "'FILL' 1" }}>
                call
              </span>
              <span className="hidden md:inline-block">Call Now</span>
            </a>

            <button
              id="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(true)}
              className="relative w-9 h-9 min-[400px]:w-10 min-[400px]:h-10 flex items-center justify-center text-blue-900 hover:text-red-700 transition-colors focus:outline-none rounded-full hover:bg-red-50 shrink-0 lg:hidden"
              aria-label="Toggle Menu"
            >
              <span className="material-symbols-outlined text-[28px] min-[400px]:text-3xl" id="menu-icon-open">
                menu
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Global Mobile Drawer */}
      <div
        id="mobile-drawer"
        className={`fixed inset-0 z-[100000] bg-slate-900/95 backdrop-blur-3xl flex flex-col items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] h-[100dvh] overflow-hidden ${isMobileMenuOpen ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-x-full opacity-0 pointer-events-none'
          }`}
      >
        <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] rounded-full bg-red-600/20 blur-[80px] pointer-events-none"></div>
        <div className="absolute -bottom-[20%] -right-[10%] w-[70vw] h-[70vw] rounded-full bg-blue-600/20 blur-[80px] pointer-events-none"></div>

        {/* Drawer Header */}
        <div className="absolute top-0 inset-x-0 flex justify-between items-start px-6 py-6 md:px-10 md:py-8 bg-gradient-to-b from-slate-900/80 to-transparent mb-auto z-20">
          <div className="flex items-center gap-2 min-[400px]:gap-3 max-w-[80%] shrink-1 min-w-0">
            <img
              src="/logo.png"
              alt="St. Mary Logo"
              className="h-9 w-9 min-[400px]:h-11 min-[400px]:w-11 sm:h-12 sm:w-12 object-contain rounded-full bg-white p-0.5 min-[400px]:p-1 shrink-0 drop-shadow-xl"
            />
            <h2 className="text-white font-serif font-bold text-[13.5px] min-[400px]:text-[16px] sm:text-lg leading-tight tracking-tighter sm:tracking-tight whitespace-nowrap overflow-hidden">
              St. Mary Public School
            </h2>
          </div>
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-14 h-14 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all active:scale-90"
            aria-label="Close Menu"
          >
            <span className="material-symbols-outlined text-[40px]">close</span>
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex flex-col items-center gap-3 w-full px-6 text-center z-20 mt-10 overflow-y-auto pb-4 pt-2">
          <a
            href="#hero-slider-section"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-[90%] max-w-[320px] text-center bg-gradient-to-r from-red-600/90 to-red-800/90 border border-red-500/50 rounded-[1.25rem] py-3.5 shadow-lg shadow-red-600/20 backdrop-blur-md text-xl font-headline font-bold text-white transition-all duration-300 active:scale-95"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-[90%] max-w-[320px] text-center bg-white/5 border border-white/10 rounded-[1.25rem] py-3.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-md text-xl font-headline font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20 active:scale-95"
          >
            About
          </a>
          <a
            href="#academics"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-[90%] max-w-[320px] text-center bg-white/5 border border-white/10 rounded-[1.25rem] py-3.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-md text-xl font-headline font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20 active:scale-95"
          >
            Academics
          </a>
          <a
            href="#activities"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-[90%] max-w-[320px] text-center bg-white/5 border border-white/10 rounded-[1.25rem] py-3.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-md text-xl font-headline font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20 active:scale-95"
          >
            Activities
          </a>
          <a
            href="#facilities"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-[90%] max-w-[320px] text-center bg-white/5 border border-white/10 rounded-[1.25rem] py-3.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-md text-xl font-headline font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20 active:scale-95"
          >
            Facilities
          </a>
          <a
            href="#gallery"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-[90%] max-w-[320px] text-center bg-white/5 border border-white/10 rounded-[1.25rem] py-3.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-md text-xl font-headline font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20 active:scale-95"
          >
            Gallery
          </a>
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-[90%] max-w-[320px] text-center bg-white/5 border border-white/10 rounded-[1.25rem] py-3.5 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] backdrop-blur-md text-xl font-headline font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20 active:scale-95"
          >
            Contact
          </a>

          <div className="w-12 h-1 bg-white/20 rounded-full my-4"></div>

          <div className="flex justify-center gap-8 w-full max-w-[280px]">
            <a href="mailto:st.mary688@gmail.com" className="flex flex-col items-center gap-2 group flex-1">
              <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute inset-x-0 -bottom-1 h-5 bg-rose-500/80 rounded-full blur-[12px]"></div>
                <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-rose-400 to-red-600 border border-white/30 flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-3xl">mail</span>
                </div>
              </div>
              <span className="text-[10px] sm:text-[11px] text-white/90 font-bold uppercase tracking-[0.15em] mt-1 group-hover:text-rose-300 transition-colors">
                Email
              </span>
            </a>
            <a
              href="https://maps.google.com/?q=St.+Mary+Public+School,+Phool+Chaur,+Nainital,+Uttarakhand+263139"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-2 group flex-1"
            >
              <div className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute inset-x-0 -bottom-1 h-5 bg-blue-500/80 rounded-full blur-[12px]"></div>
                <div className="relative w-full h-full rounded-2xl bg-gradient-to-br from-blue-400 to-indigo-600 border border-white/30 flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-3xl">location_on</span>
                </div>
              </div>
              <span className="text-[10px] sm:text-[11px] text-white/90 font-bold uppercase tracking-[0.15em] mt-1 group-hover:text-blue-300 transition-colors">
                Maps
              </span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
