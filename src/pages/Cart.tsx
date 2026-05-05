import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-32 min-h-[70vh] flex flex-col items-center justify-center bg-white">
        <div className="p-8 bg-zinc-50 rounded-full mb-8">
          <ShoppingBag size={64} className="text-zinc-300" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight mb-4">Keranjang Kosong</h2>
        <p className="text-zinc-500 mb-8">Sepertinya Anda belum menambahkan produk apapun.</p>
        <Link
          to="/products"
          className="px-8 py-4 bg-black text-white text-sm font-bold tracking-widest uppercase hover:bg-zinc-800 transition-all"
        >
          Mulai Belanja
        </Link>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight mb-12">Keranjang Belanja</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-8">
            {cart.map((item) => (
              <motion.div
                key={`${item.productId}-${item.color}-${item.size}`}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center space-x-6 p-6 border border-black/5 rounded-3xl hover:border-black/10 transition-colors"
              >
                <div className="w-24 h-32 flex-shrink-0 rounded-2xl overflow-hidden bg-zinc-100">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-bold text-lg">{item.name}</h3>
                      <p className="text-xs text-zinc-400 uppercase tracking-widest font-medium">
                        {item.color} / {item.size}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.productId, item.color, item.size)}
                      className="p-2 text-zinc-300 hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center border border-zinc-100 rounded-xl px-1">
                      <button
                        onClick={() => updateQuantity(item.productId, item.color, item.size, item.quantity - 1)}
                        className="p-2 text-zinc-400 hover:text-black"
                      >
                        <Minus size={14} />
                      </button>
                      <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.productId, item.color, item.size, item.quantity + 1)}
                        className="p-2 text-zinc-400 hover:text-black"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                    <p className="font-bold">Rp {(item.price * item.quantity).toLocaleString('id-ID')}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-zinc-50 p-8 rounded-3xl sticky top-24">
              <h3 className="text-xl font-bold mb-6">Ringkasan Pesanan</h3>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between text-zinc-500">
                  <span>Subtotal ({totalItems} item)</span>
                  <span>Rp {totalPrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between text-zinc-500">
                  <span>Pengiriman</span>
                  <span className="text-emerald-600 font-medium">Gratis</span>
                </div>
                <div className="border-t border-black/5 pt-4 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>Rp {totalPrice.toLocaleString('id-ID')}</span>
                </div>
              </div>
              <button className="w-full py-4 bg-black text-white rounded-2xl font-bold tracking-widest uppercase text-sm hover:bg-zinc-800 transition-all flex items-center justify-center group">
                Checkout
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </button>
              <p className="text-[10px] text-zinc-400 text-center mt-6 uppercase tracking-widest font-medium">
                Pembayaran aman & terenkripsi
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
