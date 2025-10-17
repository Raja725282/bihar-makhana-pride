// Import product images
import productFront from '../assets/product Front.jpg';
import productBack from '../assets/Product Back.jpg';
import productFrontBack from '../assets/Product FRONT BACK.jpg';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  images: string[];
  category: string;
  inStock: boolean;
  stockQuantity: number;
  weight: string;
  features: string[];
  nutritionalInfo?: {
    calories: string;
    protein: string;
    carbs: string;
    fat: string;
    fiber: string;
  };
  tags: string[];
  rating: number;
  reviewCount: number;
}

export const products: Product[] = [
  {
    id: '3-sutta',
    name: '3 Sutta Makhana',
    description: 'Premium quality 3 Sutta Makhana. Perfect size for everyday snacking with excellent taste and texture.',
    price: 400,
    image: productFront,
    images: [productFront, productBack, productFrontBack],
    category: 'Premium Makhana',
    inStock: true,
    stockQuantity: 100,
    weight: '250g',
    features: ['3 Sutta Grade', 'Premium Quality', 'Perfect Size', 'Crunchy Texture'],
    tags: ['3 sutta', 'makhana', 'premium'],
    rating: 4.7,
    reviewCount: 12
  },
  {
    id: '3plus-sutta',
    name: '3+ Sutta Makhana',
    description: 'Superior 3+ Sutta Makhana with larger size and premium quality. Ideal for special occasions.',
    price: 450,
    image: productFront,
    images: [productFront, productBack, productFrontBack],
    category: 'Premium Makhana',
    inStock: true,
    stockQuantity: 100,
    weight: '250g',
    features: ['3+ Sutta Grade', 'Large Size', 'Superior Quality', 'Extra Crunchy'],
    tags: ['3+ sutta', 'makhana', 'premium'],
    rating: 4.8,
    reviewCount: 15
  },
  {
    id: '5-sutta',
    name: '5 Sutta Makhana',
    description: 'Exclusive 5 Sutta Makhana, known for its large size and exceptional quality.',
    price: 500,
    image: productFront,
    images: [productFront, productBack, productFrontBack],
    category: 'Premium Makhana',
    inStock: true,
    stockQuantity: 80,
    weight: '250g',
    features: ['5 Sutta Grade', 'Extra Large Size', 'Premium Selection', 'Best Quality'],
    tags: ['5 sutta', 'makhana', 'premium'],
    rating: 4.9,
    reviewCount: 18
  },
  {
    id: '7-sutta',
    name: '7 Sutta Makhana',
    description: 'Premium 7 Sutta Makhana, the largest size available with exceptional taste and quality.',
    price: 600,
    image: productFront,
    images: [productFront, productBack, productFrontBack],
    category: 'Premium Makhana',
    inStock: true,
    stockQuantity: 50,
    weight: '250g',
    features: ['7 Sutta Grade', 'Jumbo Size', 'Finest Quality', 'Premium Selection'],
    tags: ['7 sutta', 'makhana', 'premium'],
    rating: 5.0,
    reviewCount: 20
  },
  {
    id: 'standard-makhana',
    name: 'Standard Makhana',
    description: 'Regular sized makhana perfect for everyday consumption and cooking.',
    price: 300,
    image: productFront,
    images: [productFront, productBack, productFrontBack],
    category: 'Standard Makhana',
    inStock: true,
    stockQuantity: 150,
    weight: '250g',
    features: ['Standard Grade', 'Regular Size', 'Good Quality', 'Value for Money'],
    tags: ['standard', 'makhana', 'regular'],
    rating: 4.5,
    reviewCount: 25
  },
  {
    id: 'loose-makhana',
    name: 'Loose Makhana',
    description: 'Economic loose makhana option, perfect for bulk purchases and commercial use.',
    price: 250,
    image: productFront,
    images: [productFront, productBack, productFrontBack],
    category: 'Loose Makhana',
    inStock: true,
    stockQuantity: 200,
    weight: '250g',
    features: ['Mixed Sizes', 'Economical', 'Bulk Option', 'Good for Cooking'],
    tags: ['loose', 'makhana', 'bulk'],
    rating: 4.3,
    reviewCount: 30
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (): Product[] => {
  // Return all 4 products for featured section
  return products;
};

export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};