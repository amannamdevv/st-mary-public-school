import React from 'react';

export default function LocationMapSection() {
  return (
    <section className="py-0 relative h-[500px] w-full mt-24">
      <div className="relative max-w-7xl mx-auto rounded-3xl overflow-hidden h-[500px] shadow-2xl border border-outline-variant/20 group">
        <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center">
          <div className="relative flex items-center justify-center -translate-y-6">
            <div className="absolute w-12 h-12 bg-red-500/30 rounded-full animate-ping"></div>
            <div className="absolute w-6 h-6 bg-red-500/40 rounded-full animate-pulse"></div>
            <span
              className="material-symbols-outlined text-red-600 text-[48px] drop-shadow-md relative z-10"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              location_on
            </span>
          </div>
        </div>
        <iframe
          src="https://maps.google.com/maps?&hl=en&q=St.%20Mary%20Public%20School,%20Phool%20Chaur,%20Nainital&t=&z=16&ie=UTF8&iwloc=&output=embed"
          className="absolute inset-0 w-full h-full border-0 grayscale opacity-90 transition-all duration-700 pointer-events-auto"
          allowFullScreen=""
          loading="lazy"
          title="St. Mary Public School Location Map"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className="absolute inset-0 bg-primary/5 pointer-events-none mix-blend-multiply"></div>
    </section>
  );
}
