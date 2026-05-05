export type Color = 'Hitam' | 'Putih' | 'Abu-abu' | 'Navy' | 'Merah' | 'Hijau' | 'Kuning' | 'Cream';
export type Size = 'S' | 'M' | 'L' | 'XL' | 'XXL';

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  rating: number;
  images: Record<Color, string>;
  colors: Color[];
  sizes: Size[];
  category: string;
}

export interface CartItem {
  productId: string;
  color: Color;
  size: Size;
  quantity: number;
  price: number;
  name: string;
  image: string;
}

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Basic Oversized T-Shirt',
    price: 99000,
    description: 'Kaos oversized premium dengan bahan cotton combed 24s yang lembut dan nyaman dipakai seharian.',
    rating: 4.8,
    colors: ['Hitam', 'Putih', 'Abu-abu', 'Navy', 'Cream'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'T-Shirt',
    images: {
      'Hitam': 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
      'Putih': 'https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=800',
      'Abu-abu': 'https://images.unsplash.com/photo-1562157873-818bc0726f68?auto=format&fit=crop&q=80&w=800',
      'Navy': 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800',
      'Cream': 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800', // Fallback
      'Merah': '', 'Hijau': '', 'Kuning': ''
    }
  },
  {
    id: '2',
    name: 'Heavyweight Cotton Tee',
    price: 99000,
    description: 'Kaos dengan bahan katun berat yang memberikan struktur yang bagus dan tahan lama.',
    rating: 4.9,
    colors: ['Hitam', 'Putih', 'Navy', 'Merah'],
    sizes: ['M', 'L', 'XL'],
    category: 'T-Shirt',
    images: {
      'Hitam': 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&q=80&w=800',
      'Putih': 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=800',
      'Navy': 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&q=80&w=800',
      'Merah': 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?auto=format&fit=crop&q=80&w=800',
      'Abu-abu': '', 'Hijau': '', 'Kuning': '', 'Cream': ''
    }
  },
  {
    id: '3',
    name: 'Premium Polo Shirt',
    price: 99000,
    description: 'Polo shirt minimalis untuk tampilan semi-formal yang tetap santai.',
    rating: 4.7,
    colors: ['Hitam', 'Navy', 'Hijau', 'Putih'],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'Polo',
    images: {
      'Hitam': 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&q=80&w=800',
      'Navy': 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&q=80&w=800',
      'Hijau': 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&q=80&w=800',
      'Putih': 'https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&q=80&w=800',
      'Abu-abu': '', 'Merah': '', 'Kuning': '', 'Cream': ''
    }
  },
  {
    id: '4',
    name: 'Essential Long Sleeve',
    price: 99000,
    description: 'Kaos lengan panjang yang cocok untuk cuaca dingin atau sebagai layering.',
    rating: 4.6,
    colors: ['Hitam', 'Abu-abu', 'Kuning', 'Putih'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    category: 'Long Sleeve',
    images: {
      'Hitam': 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=800',
      'Abu-abu': 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=800',
      'Kuning': 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=800',
      'Putih': 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&q=80&w=800',
      'Navy': '', 'Merah': '', 'Hijau': '', 'Cream': ''
    }
  }
];
