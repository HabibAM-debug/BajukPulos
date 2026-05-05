export const Footer = () => {
  return (
    <footer className="bg-zinc-50 border-t border-black/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold tracking-tighter mb-4">BAJUK PULOS</h3>
            <p className="text-zinc-500 max-w-xs mb-6">
              Simple dan clean. Kami menyediakan pakaian basic berkualitas tinggi untuk gaya hidup modern Anda.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><a href="/products" className="text-zinc-500 hover:text-black text-sm transition-colors">All Products</a></li>
              <li><a href="/products?category=T-Shirt" className="text-zinc-500 hover:text-black text-sm transition-colors">T-Shirts</a></li>
              <li><a href="/products?category=Polo" className="text-zinc-500 hover:text-black text-sm transition-colors">Polo Shirts</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-zinc-500 hover:text-black text-sm transition-colors">About Us</a></li>
              <li><a href="/contact" className="text-zinc-500 hover:text-black text-sm transition-colors">Contact</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-black text-sm transition-colors">Shipping Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-black/5 pt-8 flex flex-col md:flex-row justify-between items-center text-zinc-400 text-xs">
          <p>© 2024 BAJUK PULOS. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-black transition-colors">Instagram</a>
            <a href="#" className="hover:text-black transition-colors">Twitter</a>
            <a href="#" className="hover:text-black transition-colors">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
