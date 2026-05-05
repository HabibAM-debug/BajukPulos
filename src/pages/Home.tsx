import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../types';
import { Star } from 'lucide-react';

const Home = () => {
  const featuredProducts = PRODUCTS.slice(0, 3);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden bg-zinc-100">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=1920"
            alt="Hero Model"
            className="w-full h-full object-cover opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-black mb-6 leading-tight">
              BAJUK <br /> PULOS
            </h1>
            <p className="text-xl text-zinc-800 mb-8 font-medium">
              Simple dan clean. Kualitas premium untuk kenyamanan maksimal setiap hari.
            </p>
            <Link
              to="/products"
              className="inline-flex items-center px-8 py-4 bg-black text-white text-sm font-bold tracking-widest uppercase hover:bg-zinc-800 transition-all group"
            >
              Shop Now
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-2">Featured Collection</h2>
              <p className="text-zinc-500">Produk terlaris kami yang paling dicintai.</p>
            </div>
            <Link to="/products" className="text-sm font-bold border-b-2 border-black pb-1 hover:text-zinc-500 hover:border-zinc-500 transition-colors">
              View All
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Link to={`/product/${product.id}`} className="block">
                  <div className="relative aspect-[3/4] overflow-hidden bg-zinc-100 mb-4 rounded-2xl">
                    <img
                      src={Object.values(product.images)[0]}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-lg mb-1">{product.name}</h3>
                      <div className="flex items-center space-x-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={14}
                            className={i < Math.floor(product.rating) ? "fill-black text-black" : "text-zinc-300"}
                          />
                        ))}
                        <span className="text-xs text-zinc-400 ml-1">{product.rating}</span>
                      </div>
                    </div>
                    <p className="font-bold text-zinc-900">Rp {product.price.toLocaleString('id-ID')}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Section */}
      <section className="py-24 bg-zinc-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold tracking-tight mb-6">Kualitas Tanpa Kompromi</h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                Kami percaya bahwa kesederhanaan adalah puncak dari kecanggihan. Setiap helai benang dipilih dengan teliti untuk memastikan Anda mendapatkan kenyamanan terbaik dari bahan 100% Cotton Combed premium.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-xl mb-2">100% Cotton</h4>
                  <p className="text-sm text-zinc-500">Serat alami yang lembut dan menyerap keringat.</p>
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-2">Durable</h4>
                  <p className="text-sm text-zinc-500">Jahitan rapi dan kuat untuk pemakaian jangka panjang.</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-3xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=1000"
                alt="Fabric Detail"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
