export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: 'men' | 'women' | 'kids' | 'accessories';
  subcategory: string;
  images: string[];
  sizes: string[];
  colors: string[];
  inStock: boolean;
  featured: boolean;
  new: boolean;
  bestSeller: boolean;
  rating: number;
  reviewCount: number;
  material?: string;
  careInstructions?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size: string;
  color: string;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (product: Product, quantity: number, size: string, color: string) => void;
  removeFromCart: (productId: string, size: string, color: string) => void;
  updateQuantity: (productId: string, size: string, color: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}
