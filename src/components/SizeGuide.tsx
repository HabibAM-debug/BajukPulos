import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

interface SizeGuideProps {
  isOpen: boolean;
  onClose: () => void;
}

const SIZE_CHART = [
  { size: 'S', length: '68', width: '48' },
  { size: 'M', length: '70', width: '50' },
  { size: 'L', length: '72', width: '52' },
  { size: 'XL', length: '74', width: '54' },
  { size: 'XXL', length: '76', width: '56' },
];

export const SizeGuide = ({ isOpen, onClose }: SizeGuideProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-md rounded-[32px] overflow-hidden shadow-2xl"
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-8">
                <h3 className="text-2xl font-bold tracking-tight">Panduan Ukuran</h3>
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-zinc-100 rounded-full transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="space-y-6">
                <p className="text-sm text-zinc-500">
                  Semua ukuran dalam satuan centimeter (cm). Toleransi perbedaan ukuran 1-2 cm dapat terjadi.
                </p>

                <div className="overflow-hidden border border-zinc-100 rounded-2xl">
                  <table className="w-full text-sm text-left">
                    <thead className="bg-zinc-50 text-zinc-400 font-bold uppercase tracking-widest text-[10px]">
                      <tr>
                        <th className="px-6 py-4">Ukuran</th>
                        <th className="px-6 py-4">Tinggi (cm)</th>
                        <th className="px-6 py-4">Lebar (cm)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-50">
                      {SIZE_CHART.map((item) => (
                        <tr key={item.size} className="hover:bg-zinc-50 transition-colors">
                          <td className="px-6 py-4 font-bold">{item.size}</td>
                          <td className="px-6 py-4 text-zinc-600">{item.length}</td>
                          <td className="px-6 py-4 text-zinc-600">{item.width}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="bg-zinc-50 p-6 rounded-2xl space-y-4">
                  <h4 className="text-xs font-bold uppercase tracking-widest">Cara Mengukur:</h4>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-5 h-5 flex-shrink-0 bg-black text-white text-[10px] font-bold rounded-full flex items-center justify-center">1</div>
                      <p className="text-xs text-zinc-600">
                        <span className="font-bold text-black italic">Tinggi:</span> Diukur dari titik bahu tertinggi sampai ke dasar baju.
                      </p>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-5 h-5 flex-shrink-0 bg-black text-white text-[10px] font-bold rounded-full flex items-center justify-center">2</div>
                      <p className="text-xs text-zinc-600">
                        <span className="font-bold text-black italic">Lebar:</span> Diukur dari ketiak kanan ke ketiak kiri secara mendatar.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={onClose}
                className="w-full mt-8 py-4 bg-black text-white rounded-2xl font-bold tracking-widest uppercase text-sm hover:bg-zinc-800 transition-all text-center"
              >
                Tutup
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
