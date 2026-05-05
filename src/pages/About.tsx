import { motion } from 'motion/react';

const About = () => {
  return (
    <div className="pt-24 pb-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold tracking-tighter mb-6">Tentang Bajuk Pulos</h1>
          <p className="text-xl text-zinc-500">Kesederhanaan adalah bentuk tertinggi dari kecanggihan.</p>
        </motion.div>

        <div className="space-y-16">
          <section>
            <h2 className="text-2xl font-bold mb-6">Cerita Kami</h2>
            <p className="text-zinc-600 leading-relaxed mb-4">
              Bajuk Pulos lahir dari keinginan untuk menyediakan pakaian basic yang tidak hanya sekadar "baju polos", tetapi sebuah pernyataan gaya hidup. Kami percaya bahwa setiap orang membutuhkan pondasi yang kuat dalam lemari pakaian mereka.
            </p>
            <p className="text-zinc-600 leading-relaxed">
              Dimulai pada tahun 2024, kami berfokus pada tiga pilar utama: Kualitas Bahan, Kenyamanan Maksimal, dan Desain Minimalis. Kami tidak mengikuti tren yang cepat berlalu, melainkan menciptakan produk yang abadi.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-zinc-50 p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-4">Bahan Premium</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Kami hanya menggunakan 100% Cotton Combed dengan gramasi terbaik (24s & 20s) untuk memastikan sirkulasi udara yang baik dan kelembutan di kulit Anda.
              </p>
            </div>
            <div className="bg-zinc-50 p-8 rounded-3xl">
              <h3 className="text-xl font-bold mb-4">Produksi Lokal</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Setiap produk Bajuk Pulos dijahit oleh pengrajin lokal berbakat dengan standar kontrol kualitas yang sangat ketat.
              </p>
            </div>
          </div>

          <section className="text-center py-16 border-t border-black/5">
            <h2 className="text-2xl font-bold mb-6">Visi Kami</h2>
            <p className="text-zinc-500 italic max-w-2xl mx-auto">
              "Menjadi brand pilihan utama bagi mereka yang menghargai kualitas di atas kuantitas, dan kenyamanan di atas kerumitan."
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
