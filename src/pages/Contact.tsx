import { motion } from 'motion/react';
import { Mail, Instagram, MapPin, Send } from 'lucide-react';
import React, { useState } from 'react';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <div className="pt-24 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-5xl font-bold tracking-tighter mb-8">Hubungi Kami</h1>
            <p className="text-xl text-zinc-500 mb-12">Ada pertanyaan atau ingin berkolaborasi? Kami siap mendengarkan Anda.</p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-zinc-50 rounded-2xl text-black">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email</h4>
                  <p className="text-zinc-500">hello@bajukpulos.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="p-4 bg-zinc-50 rounded-2xl text-black">
                  <Instagram size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Instagram</h4>
                  <p className="text-zinc-500">@bajukpulos.official</p>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="p-4 bg-zinc-50 rounded-2xl text-black">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Studio</h4>
                  <p className="text-zinc-500">Jl. Minimalis No. 123, Jakarta Selatan, Indonesia</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-zinc-50 p-12 rounded-[40px]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-3">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  value={formState.name}
                  onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  className="w-full px-6 py-4 bg-white border border-transparent focus:border-black rounded-2xl outline-none transition-all"
                  placeholder="Masukkan nama Anda"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-3">Email</label>
                <input
                  type="email"
                  required
                  value={formState.email}
                  onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  className="w-full px-6 py-4 bg-white border border-transparent focus:border-black rounded-2xl outline-none transition-all"
                  placeholder="email@contoh.com"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest mb-3">Pesan</label>
                <textarea
                  required
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-6 py-4 bg-white border border-transparent focus:border-black rounded-2xl outline-none transition-all resize-none"
                  placeholder="Apa yang bisa kami bantu?"
                />
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-black text-white rounded-2xl font-bold tracking-widest uppercase text-sm hover:bg-zinc-800 transition-all flex items-center justify-center space-x-3"
              >
                {isSent ? (
                  <span>Pesan Terkirim!</span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Kirim Pesan</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
