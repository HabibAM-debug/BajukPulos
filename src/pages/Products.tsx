import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PRODUCTS, Color, Size } from '../types';
import { Star, Filter, X, ChevronDown } from 'lucide-react';
import { cn } from '../lib/utils';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedColor, setSelectedColor] = useState<Color | 'All'>('All');
  const [selectedSize, setSelectedSize] = useState<Size | 'All'>('All');
  const [priceRange, setPriceRange] = useState<number>(300000);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = ['All', 'T-Shirt', 'Polo', 'Long Sleeve'];
  const colors: Color[] = ['Hitam', 'Putih', 'Abu-abu', 'Navy', 'Merah', 'Hijau', 'Kuning', 'Cream'];
  const sizes: Size[] = ['S', 'M', 'L', 'XL', 'XXL'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
      const colorMatch = selectedColor === 'All' || product.colors.includes(selectedColor as Color);
      const sizeMatch = selectedSize === 'All' || product.sizes.includes(selectedSize as Size);
      const priceMatch = product.price <= priceRange;
      return categoryMatch && colorMatch && sizeMatch && priceMatch;
    });
  }, [selectedCategory, selectedColor, selectedSize, priceRange]);

  return (
    <div className="pt-24 pb-24 min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div>
            <h1 className="text-4xl font-bold tracking-tight mb-2">Katalog Produk</h1>
            <p className="text-zinc-500">Temukan gaya minimalis Anda di sini.</p>
          </div>
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="flex items-center space-x-2 px-6 py-3 border border-black rounded-full hover:bg-black hover:text-white transition-all"
          >
            <Filter size={18} />
            <span className="font-bold text-sm uppercase tracking-widest">Filter</span>
          </button>
        </div>

        {/* Filters Panel */}
        <AnimatePresence>
          {isFilterOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden mb-12 border-b border-black/5 pb-12"
            >
              <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Category Filter */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Category</h4>
                  <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={cn(
                          "px-4 py-2 text-sm rounded-full border transition-all",
                          selectedCategory === cat ? "bg-black text-white border-black" : "border-zinc-200 text-zinc-500 hover:border-black"
                        )}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Filter */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Color</h4>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedColor('All')}
                      className={cn(
                        "px-4 py-2 text-sm rounded-full border transition-all",
                        selectedColor === 'All' ? "bg-black text-white border-black" : "border-zinc-200 text-zinc-500 hover:border-black"
                      )}
                    >
                      All
                    </button>
                    {colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={cn(
                          "px-4 py-2 text-sm rounded-full border transition-all",
                          selectedColor === color ? "bg-black text-white border-black" : "border-zinc-200 text-zinc-500 hover:border-black"
                        )}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Size Filter */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Size</h4>
                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={() => setSelectedSize('All')}
                      className={cn(
                        "px-4 py-2 text-sm rounded-full border transition-all",
                        selectedSize === 'All' ? "bg-black text-white border-black" : "border-zinc-200 text-zinc-500 hover:border-black"
                      )}
                    >
                      All
                    </button>
                    {sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={cn(
                          "px-4 py-2 text-sm rounded-full border transition-all",
                          selectedSize === size ? "bg-black text-white border-black" : "border-zinc-200 text-zinc-500 hover:border-black"
                        )}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Max Price: Rp {priceRange.toLocaleString('id-ID')}</h4>
                  <input
                    type="range"
                    min="100000"
                    max="300000"
                    step="10000"
                    value={priceRange}
                    onChange={(e) => setPriceRange(parseInt(e.target.value))}
                    className="w-full h-1 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-black"
                  />
                  <div className="flex justify-between text-[10px] text-zinc-400 mt-2">
                    <span>Rp 100k</span>
                    <span>Rp 300k</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
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
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="w-full py-3 bg-white text-black text-xs font-bold uppercase tracking-widest rounded-lg shadow-xl hover:bg-black hover:text-white transition-all">
                        Lihat Detail
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold text-base mb-1">{product.name}</h3>
                      <div className="flex items-center space-x-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            size={12}
                            className={i < Math.floor(product.rating) ? "fill-black text-black" : "text-zinc-300"}
                          />
                        ))}
                        <span className="text-[10px] text-zinc-400 ml-1">{product.rating}</span>
                      </div>
                    </div>
                    <p className="font-bold text-zinc-900 text-sm">Rp {product.price.toLocaleString('id-ID')}</p>
                  </div>
                </Link>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full py-24 text-center">
              <p className="text-zinc-400 text-lg">Tidak ada produk yang sesuai dengan filter Anda.</p>
              <button
                onClick={() => {
                  setSelectedCategory('All');
                  setSelectedColor('All');
                  setSelectedSize('All');
                  setPriceRange(300000);
                }}
                className="mt-4 text-black font-bold border-b border-black"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
