import React from 'react';
import {
  Compass,
  MapPin,
  Phone,
  Mail,
  School,
  Clock,
  Sun,
  Palette,
  BookOpen,
  Sparkles,
  Rocket,
  Heart,
} from 'lucide-react';

export default function Footer({ onOpenWaModal }) {
  return (
    <footer id="contact" className="relative overflow-hidden bg-slate-950 pt-32 pb-12 mt-24 border-t-8 border-primary">
      {/* Magical Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden mix-blend-screen opacity-60">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-fuchsia-600 rounded-full blur-[120px] opacity-40 animate-[pulse_4s_ease-in-out_infinite]"></div>
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-cyan-500 rounded-full blur-[100px] opacity-30 animate-[pulse_6s_ease-in-out_infinite]"></div>
        <div className="absolute -bottom-40 left-1/3 w-80 h-80 bg-amber-500 rounded-full blur-[120px] opacity-30 animate-[pulse_8s_ease-in-out_infinite]"></div>
      </div>

      {/* Floating Decorative Vector SVG Stickers */}
      <div className="absolute top-10 left-10 opacity-30 rotate-12 drop-shadow-2xl hover:scale-125 transition-transform duration-500">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 text-white flex items-center justify-center shadow-lg border border-white/20">
          <Heart className="w-7 h-7" />
        </div>
      </div>
      <div className="absolute top-20 right-20 opacity-30 -rotate-12 drop-shadow-2xl hover:scale-125 transition-transform duration-500">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 text-white flex items-center justify-center shadow-lg border border-white/20">
          <Palette className="w-7 h-7" />
        </div>
      </div>
      <div className="absolute bottom-40 left-1/4 opacity-25 rotate-6 drop-shadow-2xl hover:scale-125 transition-transform duration-500">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white flex items-center justify-center shadow-lg border border-white/20">
          <BookOpen className="w-7 h-7" />
        </div>
      </div>
      <div className="absolute top-1/2 right-1/4 opacity-20 rotate-45 drop-shadow-2xl hover:scale-125 transition-transform duration-500">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-400 to-yellow-500 text-white flex items-center justify-center shadow-lg border border-white/20">
          <Sparkles className="w-6 h-6" />
        </div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-30 -rotate-6 drop-shadow-2xl hover:scale-125 transition-transform duration-500">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-600 text-white flex items-center justify-center shadow-lg border border-white/20">
          <Rocket className="w-7 h-7" />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8">
        
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          
          {/* Brand Box */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-500">
            <div>
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center p-2 mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-white mb-3">St. Mary Public School</h3>
              <p className="text-white/80 font-body text-sm leading-relaxed mb-6">
                Nurturing young minds with love, discipline, and creative freedom since 2018. Every child is a star here!
              </p>
            </div>
            <a
              className="inline-flex items-center gap-2 bg-[#1877F2] text-white px-6 py-3 rounded-xl font-bold hover:scale-105 active:scale-95 transition-all shadow-[0_10px_20px_-5px_rgba(24,119,242,0.5)] group/fb"
              href="https://www.facebook.com/share/14a5mUDBrit/"
              target="_blank"
              rel="noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-white" fill="currentColor">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="text-lg tracking-tight">facebook</span>
            </a>
          </div>

          {/* Quick Links */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h4 className="font-headline text-xl font-bold mb-6 text-white flex items-center gap-3 relative z-10">
              <span className="w-8 h-8 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm drop-shadow-md">
                <Compass className="w-4 h-4 text-cyan-400" />
              </span>
              Quick Links
            </h4>
            <ul className="space-y-4 font-body text-sm relative z-10">
              <li><a className="text-white/70 hover:text-cyan-400 font-medium transition-all hover:translate-x-1 flex items-center gap-2" href="#hero-slider-section"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></span>Home</a></li>
              <li><a className="text-white/70 hover:text-cyan-400 font-medium transition-all hover:translate-x-1 flex items-center gap-2" href="#about"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></span>About</a></li>
              <li><a className="text-white/70 hover:text-cyan-400 font-medium transition-all hover:translate-x-1 flex items-center gap-2" href="#academics"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></span>Academics</a></li>
              <li><a className="text-white/70 hover:text-cyan-400 font-medium transition-all hover:translate-x-1 flex items-center gap-2" href="#activities"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></span>Activities</a></li>
              <li><a className="text-white/70 hover:text-cyan-400 font-medium transition-all hover:translate-x-1 flex items-center gap-2" href="#facilities"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></span>Facilities</a></li>
              <li><a className="text-white/70 hover:text-cyan-400 font-medium transition-all hover:translate-x-1 flex items-center gap-2" href="#gallery"><span className="w-1.5 h-1.5 rounded-full bg-cyan-500/50"></span>Gallery</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h4 className="font-headline text-xl font-bold mb-6 text-white flex items-center gap-3 relative z-10">
              <span className="w-8 h-8 rounded-full bg-amber-500/20 text-amber-400 flex items-center justify-center text-sm drop-shadow-md">
                <MapPin className="w-4 h-4 text-amber-400" />
              </span>
              Contact Us
            </h4>
            <ul className="space-y-4 font-body text-sm relative z-10">
              <li>
                <a href="tel:8077774324" className="flex items-center gap-3 hover:text-amber-400 group/link transition-colors cursor-pointer text-base">
                  <div className="w-8 h-8 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-400 group-hover/link:scale-110 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <span className="text-white/90 font-medium group-hover/link:text-white transition-colors">8077774324</span>
                </a>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenWaModal}
                  className="flex items-center gap-3 hover:text-[#25D366] group/link transition-colors cursor-pointer text-base w-full text-left"
                >
                  <div className="w-8 h-8 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover/link:scale-110 transition-transform">
                    <svg className="w-4 h-4 fill-[#25D366]" viewBox="-0.5 -0.5 25.1 25.1">
                      <path d="M12.031 0C5.395 0 0 5.396 0 12.031c0 2.118.553 4.184 1.595 6.007L.036 24l6.126-1.57A11.972 11.972 0 0012.031 24c6.634 0 12.03-5.396 12.03-12.03S18.665 0 12.031 0zm7.152 17.202c-.302.846-1.742 1.597-2.396 1.666-.615.064-1.398.156-4.008-1.042-3.15-1.442-5.188-4.664-5.343-4.87-.156-.206-1.272-1.692-1.272-3.23 0-1.54.802-2.304 1.085-2.612.28-.31.606-.388.81-.388.205 0 .41.002.593.01.196.009.458-.076.716.549.27.653.918 2.247.999 2.411.082.164.135.355.032.56-.104.205-.157.332-.314.515-.156.184-.336.388-.475.534-.156.164-.32.34-.136.657.184.316.822 1.357 1.764 2.196 1.218 1.084 2.235 1.419 2.544 1.574.31.156.492.13.676-.077.184-.206.793-.93.999-1.25.205-.318.41-.265.696-.155.286.11 1.796.845 2.102 1.001.306.156.51.26.584.405.074.145.074.845-.228 1.691z" />
                    </svg>
                  </div>
                  <span className="text-[#25D366] font-bold group-hover/link:text-[#20bd5a] transition-colors">Chat on WhatsApp</span>
                </button>
              </li>
              <li>
                <a href="mailto:st.mary688@gmail.com" className="flex items-center gap-3 hover:text-cyan-400 group/link transition-colors cursor-pointer text-base">
                  <div className="w-8 h-8 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover/link:scale-110 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <span className="text-white/90 font-medium group-hover/link:text-white transition-colors">st.mary688@gmail.com</span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=St.+Mary+Public+School,+Phool+Chaur,+Nainital,+Uttarakhand+263139"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 hover:text-fuchsia-400 group/link transition-colors cursor-pointer text-base pt-1"
                >
                  <div className="w-8 h-8 rounded-full bg-fuchsia-500/10 flex items-center justify-center text-fuchsia-400 group-hover/link:scale-110 transition-transform shrink-0">
                    <School className="w-4 h-4" />
                  </div>
                  <span className="text-white/80 font-medium leading-relaxed group-hover/link:text-white transition-colors mt-0.5">
                    Phool Chaur, Nainital, Uttarakhand 263139
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <h4 className="font-headline text-xl font-bold mb-6 text-white flex items-center gap-3 relative z-10">
              <span className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm drop-shadow-md">
                <Clock className="w-4 h-4 text-emerald-400" />
              </span>
              Office Hours
            </h4>
            <div className="space-y-4 font-body relative z-10">
              <div className="bg-white/5 rounded-2xl p-5 border border-white/5 flex flex-col gap-4 shadow-inner">
                <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <Sun className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="text-white font-bold text-sm">Monday — Saturday</p>
                    <p className="text-emerald-400 text-[10px] font-bold uppercase tracking-widest">All Seasons (Winter &amp; Summer)</p>
                  </div>
                </div>
                <div className="bg-white/10 rounded-xl p-4 border border-white/5 flex items-center justify-between group/time hover:bg-white/20 transition-all">
                  <span className="text-white/60 text-xs font-bold uppercase tracking-wider">Reporting Time</span>
                  <span className="text-white font-black text-lg tracking-tight">08:00 AM — 02:00 PM</span>
                </div>
                <div className="flex items-center justify-center gap-2 py-1 px-4 bg-rose-500/10 rounded-lg border border-rose-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse"></span>
                  <span className="text-rose-400 font-bold text-[10px] uppercase tracking-widest">Sunday Closed</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center border border-white/10 text-white/60">
              <School className="w-4 h-4 text-white/60" />
            </div>
            <p className="text-sm text-white/50 font-medium">© 2026 St. Mary Public School. All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-sm text-white/50 font-medium">
            <a className="hover:text-cyan-400 hover:scale-105 transition-all" href="#">Privacy Policy</a>
            <a className="hover:text-cyan-400 hover:scale-105 transition-all" href="#">Terms of Service</a>
          </div>
        </div>

        {/* AMVIK Technologies Signature */}
        <div className="pt-8 text-center border-t border-white/5 mt-8">
          <div className="inline-flex items-center justify-center gap-3 opacity-40 hover:opacity-100 transition-opacity duration-300">
            <span className="text-[10px] font-bold text-white/40 tracking-widest uppercase select-none">
              Architected &amp; Engineered by
            </span>
            <div className="flex items-center gap-2 select-none">
              <div className="relative w-6 h-6">
                <img src="/amvik_logo.png" alt="AMVIK Technologies" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col items-start leading-none">
                <span className="font-serif text-[11px] font-extrabold text-white">
                  AMVIK <span className="text-cyan-400">Technologies</span>
                </span>
                <span className="text-[8px] font-semibold text-white/40 tracking-wider uppercase mt-0.5">
                  Software &amp; Digital Solutions
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
