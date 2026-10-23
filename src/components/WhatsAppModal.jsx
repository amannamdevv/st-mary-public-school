import React, { useState } from 'react';

export default function WhatsAppModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    let text = `Hello St. Mary Public School Administration,\n\nMy name is *${name}*.\n`;
    if (message.trim() !== '') {
      text += `\n${message}\n`;
    }
    text += `\nI am reaching out via your website.`;

    const encodedText = encodeURIComponent(text);
    const waUrl = `https://wa.me/918077774324?text=${encodedText}`;

    window.open(waUrl, '_blank');
    setName('');
    setMessage('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[10000] bg-slate-900/60 backdrop-blur-md flex items-center justify-center p-4 transition-all duration-300">
      <div className="bg-white rounded-3xl w-full max-w-md p-8 shadow-2xl transform transition-all duration-300 animate-in fade-in zoom-in-95">
        <div className="flex items-center justify-center w-16 h-16 bg-[#25D366]/10 rounded-full mb-6 mx-auto">
          <svg className="w-8 h-8 fill-[#25D366]" viewBox="-0.5 -0.5 25.1 25.1">
            <path d="M12.031 0C5.395 0 0 5.396 0 12.031c0 2.118.553 4.184 1.595 6.007L.036 24l6.126-1.57A11.972 11.972 0 0012.031 24c6.634 0 12.03-5.396 12.03-12.03S18.665 0 12.031 0zm7.152 17.202c-.302.846-1.742 1.597-2.396 1.666-.615.064-1.398.156-4.008-1.042-3.15-1.442-5.188-4.664-5.343-4.87-.156-.206-1.272-1.692-1.272-3.23 0-1.54.802-2.304 1.085-2.612.28-.31.606-.388.81-.388.205 0 .41.002.593.01.196.009.458-.076.716.549.27.653.918 2.247.999 2.411.082.164.135.355.032.56-.104.205-.157.332-.314.515-.156.184-.336.388-.475.534-.156.164-.32.34-.136.657.184.316.822 1.357 1.764 2.196 1.218 1.084 2.235 1.419 2.544 1.574.31.156.492.13.676-.077.184-.206.793-.93.999-1.25.205-.318.41-.265.696-.155.286.11 1.796.845 2.102 1.001.306.156.51.26.584.405.074.145.074.845-.228 1.691z" />
          </svg>
        </div>
        <h3 className="font-headline text-2xl font-bold text-slate-800 text-center mb-2">Connect on WhatsApp</h3>
        <p className="text-slate-500 text-sm text-center mb-6">Our administration team typically responds within 1 working day.</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">First Name *</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20 transition-all outline-none text-sm"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Message (Optional)</label>
            <textarea
              rows="3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:border-[#25D366] focus:ring-2 focus:ring-[#25D366]/20 transition-all outline-none text-sm resize-none"
              placeholder="What would you like to ask?"
            ></textarea>
          </div>
          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 rounded-xl font-bold text-sm transition-all focus:outline-none focus:ring-2 focus:ring-slate-300 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-2/3 bg-[#25D366] hover:bg-[#20bd5a] text-white py-3 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#25D366]/50 cursor-pointer"
            >
              Continue
              <span className="material-symbols-outlined text-lg">open_in_new</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
