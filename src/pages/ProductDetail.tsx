import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PRODUCTS, Color, Size, Product } from '../types';
import { Star, Minus, Plus, ShoppingBag, ArrowLeft, Ruler } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';
import { SizeGuide } from '../components/SizeGuide';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<Color>('Hitam');
  const [selectedSize, setSelectedSize] = useState<Size>('M');
  const [quantity, setQuantity] = useState(1);
  const [isAdding, setIsAdding] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);

  useEffect(() => {
    const foundProduct = PRODUCTS.find((p) => p.id === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedColor(foundProduct.colors[0]);
      setSelectedSize(foundProduct.sizes[0]);
    } else {
      navigate('/products');
    }
  }, [id, navigate]);

  if (!product) return null;

  const handleAddToCart = () => {
    setIsAdding(true);
    addToCart({
      productId: product.id,
      name: product.name,
      price: product.price,
      color: selectedColor,
      size: selectedSize,
      quantity: quantity,
      image: product.images[selectedColor] || Object.values(product.images)[0],
    });
    setTimeout(() => setIsAdding(false), 1000);
  };

  const currentImage = product.images[selectedColor] || Object.values(product.images)[0];

  return (
    <div className="pt-24 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/products" className="inline-flex items-center text-zinc-500 hover:text-black mb-8 transition-colors">
          <ArrowLeft size={18} className="mr-2" />
          <span className="text-sm font-medium">Kembali ke Katalog</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-zinc-100"
          >
            <img
              src={currentImage}
              alt={product.name}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="mb-8">
              <div className="flex items-center space-x-2 mb-4">
                <span className="px-3 py-1 bg-zinc-100 text-zinc-600 text-[10px] font-bold uppercase tracking-widest rounded-full">
                  {product.category}
                </span>
                <div className="flex items-center space-x-1">
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
              <h1 className="text-4xl font-bold tracking-tight mb-4">{product.name}</h1>
              <p className="text-2xl font-bold text-black">Rp {product.price.toLocaleString('id-ID')}</p>
            </div>

            <div className="mb-8">
              <p className="text-zinc-500 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Color Selection */}
            <div className="mb-8">
              <h4 className="text-xs font-bold uppercase tracking-widest mb-4">Warna: {selectedColor}</h4>
              <div className="flex flex-wrap gap-3">
                {product.colors.map((color) => (
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

            {/* Size Selection */}
            <div className="mb-8">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-xs font-bold uppercase tracking-widest">Ukuran: {selectedSize}</h4>
                <button
                  onClick={() => setIsSizeGuideOpen(true)}
                  className="flex items-center space-x-2 text-[10px] font-bold uppercase tracking-widest text-zinc-400 hover:text-black transition-colors"
                >
                  <Ruler size={14} />
                  <span>Panduan Ukuran</span>
                </button>
              </div>
              <div className="flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={cn(
                      "w-12 h-12 flex items-center justify-center text-sm font-bold rounded-xl border transition-all",
                      selectedSize === size ? "bg-black text-white border-black" : "border-zinc-200 text-zinc-500 hover:border-black"
                    )}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center border border-zinc-200 rounded-xl px-2 py-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 text-zinc-400 hover:text-black transition-colors"
                >
                  <Minus size={18} />
                </button>
                <span className="w-12 text-center font-bold">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 text-zinc-400 hover:text-black transition-colors"
                >
                  <Plus size={18} />
                </button>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={isAdding}
                className={cn(
                  "flex-1 flex items-center justify-center space-x-3 py-4 rounded-2xl font-bold tracking-widest uppercase text-sm transition-all",
                  isAdding ? "bg-emerald-500 text-white" : "bg-black text-white hover:bg-zinc-800"
                )}
              >
                {isAdding ? (
                  <span>Berhasil Ditambahkan!</span>
                ) : (
                  <>
                    <ShoppingBag size={18} />
                    <span>Tambah ke Keranjang</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
      <SizeGuide isOpen={isSizeGuideOpen} onClose={() => setIsSizeGuideOpen(false)} />
    </div>
  );
};

export default ProductDetail;
