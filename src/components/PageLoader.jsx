import React, { useState, useEffect } from 'react';
import { Palette, Rocket, BookOpen, Trophy, Sparkles } from 'lucide-react';

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div id="page-loader" className="transition-opacity duration-700">
      <div className="loader-bg-blob-1"></div>
      <div className="loader-bg-blob-2"></div>
      
      {/* Sparkle particles */}
      <div className="loader-particle" style={{ '--pdur': '2.8s', '--pdelay': '0s', width: '6px', height: '6px', background: '#fbbf24', top: '20%', left: '25%' }}></div>
      <div className="loader-particle" style={{ '--pdur': '3.5s', '--pdelay': '0.5s', width: '8px', height: '8px', background: '#60a5fa', top: '60%', left: '15%' }}></div>
      <div className="loader-particle" style={{ '--pdur': '4s', '--pdelay': '1s', width: '5px', height: '5px', background: '#f87171', top: '30%', right: '18%' }}></div>
      <div className="loader-particle" style={{ '--pdur': '2.5s', '--pdelay': '1.5s', width: '7px', height: '7px', background: '#34d399', top: '75%', right: '22%' }}></div>
      <div className="loader-particle" style={{ '--pdur': '3.2s', '--pdelay': '0.8s', width: '6px', height: '6px', background: '#c084fc', top: '15%', right: '30%' }}></div>
      <div className="loader-particle" style={{ '--pdur': '4.5s', '--pdelay': '2s', width: '9px', height: '9px', background: '#e879f9', bottom: '20%', left: '35%' }}></div>

      <div className="loader-ring-wrap">
        <div className="loader-logo-wrap">
          <img src="/logo.png" alt="St. Mary Public School" draggable="false" style={{ WebkitUserDrag: 'none', userSelect: 'none' }} />
        </div>
        
        {/* Orbital arms with high quality SVG stickers */}
        <div className="l-arm" style={{ animationDelay: '0s' }}>
          <div className="l-icon text-amber-300" style={{ animationDelay: '0s' }}>
            <Palette className="w-5 h-5 drop-shadow-[0_0_8px_rgba(252,211,77,0.8)]" />
          </div>
        </div>
        <div className="l-arm" style={{ animationDelay: '-2.4s' }}>
          <div className="l-icon text-cyan-300" style={{ animationDelay: '-2.4s' }}>
            <Rocket className="w-5 h-5 drop-shadow-[0_0_8px_rgba(103,232,249,0.8)]" />
          </div>
        </div>
        <div className="l-arm" style={{ animationDelay: '-4.8s' }}>
          <div className="l-icon text-rose-300" style={{ animationDelay: '-4.8s' }}>
            <BookOpen className="w-5 h-5 drop-shadow-[0_0_8px_rgba(253,164,175,0.8)]" />
          </div>
        </div>
        <div className="l-arm" style={{ animationDelay: '-7.2s' }}>
          <div className="l-icon text-emerald-300" style={{ animationDelay: '-7.2s' }}>
            <Trophy className="w-5 h-5 drop-shadow-[0_0_8px_rgba(110,231,183,0.8)]" />
          </div>
        </div>
        <div className="l-arm" style={{ animationDelay: '-9.6s' }}>
          <div className="l-icon text-purple-300" style={{ animationDelay: '-9.6s' }}>
            <Sparkles className="w-5 h-5 drop-shadow-[0_0_8px_rgba(216,180,254,0.8)]" />
          </div>
        </div>
      </div>

      <div className="loader-text-wrap">
        <div className="loader-pill">
          <p className="loader-school-name">St. Mary Public School</p>
        </div>
        <div className="loader-subtitle">
          {'Getting Ready..'.split('').map((char, i) => (
            <span key={i} className="wavy-char" style={{ animationDelay: `${i * 0.1}s` }}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
