import React from 'react';
import { Camera, Sparkles, Flame, PartyPopper, ExternalLink } from 'lucide-react';

const col1 = [
  { tag: "TEACHER'S DAY", tagBg: 'bg-primary', img: '/gallery/photo_1.jpg', aspect: 'aspect-[4/5]', title: "Honouring Our Dedicated Faculty — Teacher's Day Celebration" },
  { tag: 'CHRISTMAS', tagBg: 'bg-secondary', img: '/gallery/photo_8.jpg', aspect: 'aspect-square', title: 'Ho Ho Ho! Christmas Cheer Fills Our Campus' },
  { tag: 'HOLI', tagBg: 'bg-primary', img: '/gallery/photo_15.jpg', aspect: 'aspect-[4/5]', title: 'Colours of Togetherness — Holi Celebrations at St. Mary' },
  { tag: 'RISING STAR', tagBg: 'bg-amber-500', img: '/students/tribhuwan-rautela.png', aspect: 'aspect-square', title: "Mukhyamantri Udiyaman Khiladi Scholar — Celebrating Tribhuwan Singh Rautela's milestone." },
];

const col2 = [
  { tag: '', tagBg: '', img: '/gallery/photo_13.jpg', aspect: 'aspect-[3/4]', title: 'Our School — Where Every Dream Takes Root' },
  { tag: 'REPUBLIC DAY', tagBg: 'bg-secondary', img: '/gallery/photo_12.jpg', aspect: 'aspect-video', title: 'Young Patriots March — Republic Day Parade' },
  { tag: 'SPORTS', tagBg: 'bg-primary', img: '/gallery/photo_2.jpg', aspect: 'aspect-[4/5]', title: 'Vikas Khand Sports Meet — Our Athletes Shine' },
  { tag: 'SPORTS', tagBg: 'bg-emerald-600', img: '/activities/sports_featured.png', aspect: 'aspect-[4/5]', title: 'Pursuing Excellence — Determination and spirit on the sports field.' },
];

const col3 = [
  { tag: 'REPUBLIC DAY', tagBg: 'bg-secondary', img: '/gallery/photo_11.jpg', aspect: 'aspect-square', title: 'Colours of India — Republic Day Splendour' },
  { tag: 'PROUD MOMENT', tagBg: 'bg-primary', img: '/gallery/photo_16.jpg', aspect: 'aspect-[3/4]', title: 'Harshit Negi — 5th Rank in JNV Entrance Exam!' },
  { tag: '', tagBg: '', img: '/gallery/photo_4.jpg', aspect: 'aspect-[4/5]', title: 'A Happy Day — Smiles, Fun & Friends!' },
];

const gridPhotos = [
  { tag: 'SPORTS', tagBg: 'bg-secondary', img: '/gallery/photo_3.jpg', title: 'Medal of Excellence — Sports Day Recognition' },
  { tag: 'CULTURAL', tagBg: 'bg-primary', img: '/gallery/photo_7.jpg', title: 'Roots & Heritage — Cultural Art Exhibition' },
  { tag: 'CULTURAL DANCE', tagBg: 'bg-secondary', img: '/gallery/photo_14.jpg', title: 'Grace in Motion — Republic Day Cultural Performance' },
  { tag: 'PROUD MOMENT', tagBg: 'bg-primary', img: '/gallery/photo_17.jpg', title: 'Purvi Chauhan — Selected for Navodaya Vidyalaya!' },

  { tag: 'CAMPUS', tagBg: 'bg-secondary', img: '/gallery/new_activity_01.jpg', title: 'Our Beautiful Campus Infrastructure' },
  { tag: 'LEARNING', tagBg: 'bg-primary', img: '/gallery/new_activity_03.jpg', title: 'Vibrant & Engaging Classrooms' },
  { tag: 'FITNESS', tagBg: 'bg-secondary', img: '/gallery/new_activity_16.jpg', title: 'Morning Physical Training Sessions' },
  { tag: 'COMMUNITY', tagBg: 'bg-primary', img: '/gallery/new_activity_05.jpg', title: 'Celebrating Student Achievements' },

  { tag: 'DISCIPLINE', tagBg: 'bg-primary', img: '/gallery/new_activity_14.jpg', title: 'Instilling Discipline at Morning Assembly' },
  { tag: 'PTM', tagBg: 'bg-secondary', img: '/gallery/new_activity_07.jpg', title: 'Collaborative Parent-Teacher Meetings' },
  { tag: 'ACADEMICS', tagBg: 'bg-primary', img: '/gallery/new_activity_10.jpg', title: 'Inspiring Educational Environments' },
  { tag: 'CAMPUS', tagBg: 'bg-secondary', img: '/gallery/new_activity_12.jpg', title: 'Welcoming Every Student with Pride' },

  { tag: 'MILESTONES', tagBg: 'bg-secondary', img: '/gallery/new_activity_02.jpg', title: 'Celebrating Annual Result Day' },
  { tag: 'FACILITIES', tagBg: 'bg-primary', img: '/gallery/new_activity_06.jpg', title: 'Spacious Learning Environment' },
  { tag: 'SPORTS', tagBg: 'bg-secondary', img: '/gallery/new_activity_15.jpg', title: 'Fostering Physical Well-being' },
  { tag: 'ARCHITECTURE', tagBg: 'bg-primary', img: '/gallery/new_activity_11.jpg', title: 'Our Safe, Nurturing Campus' },
];

export default function StudentGallerySection() {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden" id="gallery">
      {/* Playful Floating Vector SVG stickers framing the gallery */}
      <div className="absolute top-40 left-10 opacity-30 -rotate-12 animate-[bounce_6s_infinite]">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-lg">
          <Camera className="w-7 h-7" />
        </div>
      </div>
      <div className="absolute top-1/3 right-10 opacity-30 rotate-12 animate-[bounce_5s_infinite]">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 text-white flex items-center justify-center shadow-lg">
          <Sparkles className="w-7 h-7" />
        </div>
      </div>
      <div className="absolute bottom-1/3 left-20 opacity-30 rotate-45 animate-[pulse_4s_infinite]">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-red-600 text-white flex items-center justify-center shadow-lg">
          <Flame className="w-7 h-7" />
        </div>
      </div>
      <div className="absolute bottom-20 right-20 opacity-30 -rotate-6 animate-[pulse_6s_infinite]">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-600 text-white flex items-center justify-center shadow-lg">
          <PartyPopper className="w-7 h-7" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 relative z-10">
        <div className="text-center mb-20 relative">
          <div className="w-20 h-2 bg-gradient-to-r from-blue-400 to-indigo-500 mx-auto mb-6 rounded-full shadow-sm"></div>
          <h2 className="font-headline text-5xl lg:text-6xl font-bold text-slate-800 mb-6 tracking-tight">
            Our Vibrant <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-rose-400">Community</span>
          </h2>
          <p className="text-xl text-slate-600 font-medium mt-6 max-w-2xl mx-auto leading-relaxed">
            Real moments, uncontainable joy — witness the spirit of excellence that defines St. Mary Public School every single day.
          </p>
        </div>

        {/* Masonry-Style Top Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1 */}
          <div className="space-y-6">
            {col1.map((item, idx) => (
              <div key={idx} className="group relative rounded-xl overflow-hidden shadow-md">
                {item.tag && (
                  <div className={`absolute top-4 left-4 z-10 ${item.tagBg} text-white px-3 py-1 text-xs font-bold rounded-full tracking-wide shadow-sm`}>
                    {item.tag}
                  </div>
                )}
                <img
                  className={`w-full h-auto object-cover object-top ${item.aspect} group-hover:scale-105 transition-transform duration-700`}
                  alt={item.title}
                  src={item.img}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold text-base italic">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-6">
            {col2.map((item, idx) => (
              <div key={idx} className="group relative rounded-xl overflow-hidden shadow-md">
                {item.tag && (
                  <div className={`absolute top-4 left-4 z-10 ${item.tagBg} text-white px-3 py-1 text-xs font-bold rounded-full tracking-wide shadow-sm`}>
                    {item.tag}
                  </div>
                )}
                <img
                  className={`w-full h-auto object-cover object-top ${item.aspect} group-hover:scale-105 transition-transform duration-700`}
                  alt={item.title}
                  src={item.img}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold text-base italic">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="space-y-6">
            {col3.map((item, idx) => (
              <div key={idx} className="group relative rounded-xl overflow-hidden shadow-md">
                {item.tag && (
                  <div className={`absolute top-4 left-4 z-10 ${item.tagBg} text-white px-3 py-1 text-xs font-bold rounded-full tracking-wide shadow-sm`}>
                    {item.tag}
                  </div>
                )}
                <img
                  className={`w-full h-auto object-cover object-top ${item.aspect} group-hover:scale-105 transition-transform duration-700`}
                  alt={item.title}
                  src={item.img}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <p className="text-white font-semibold text-base italic">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Additional Rich Rows */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
          {gridPhotos.map((item, idx) => (
            <div key={idx} className="group relative rounded-xl overflow-hidden shadow-md">
              <div className={`absolute top-4 left-4 z-10 ${item.tagBg} text-white px-3 py-1 text-xs font-bold rounded-full tracking-wide shadow-sm`}>
                {item.tag}
              </div>
              <img
                className="w-full h-auto object-cover aspect-square group-hover:scale-105 transition-transform duration-700"
                alt={item.title}
                src={item.img}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold text-sm italic">{item.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Facebook Link CTA */}
        <div className="mt-20 text-center relative z-10">
          <a
            href="https://www.facebook.com/share/14a5mUDBrit/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 px-12 py-5 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold rounded-[2rem] hover:from-indigo-700 hover:to-blue-700 transition-all border border-indigo-400/50 shadow-xl shadow-indigo-900/20 hover:scale-105 active:scale-95 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6 fill-white group-hover:scale-110 transition-transform">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span className="text-lg tracking-wide">View More on Our Facebook Page</span>
            <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
