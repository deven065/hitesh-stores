'use client';

import { useState } from 'react';
import ProductCard from '@/app/components/ProductCard';
import { products } from '@/data/products';

export default function SalePage() {
  const saleProducts = products.filter((p) => p.originalPrice && p.originalPrice > p.price);
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = ['men', 'women', 'kids', 'accessories'];

  let filteredProducts = selectedCategory
    ? saleProducts.filter((p) => p.category === selectedCategory)
    : saleProducts;

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'discount':
        const aDiscount = a.originalPrice ? ((a.originalPrice - a.price) / a.originalPrice) * 100 : 0;
        const bDiscount = b.originalPrice ? ((b.originalPrice - b.price) / b.originalPrice) * 100 : 0;
        return bDiscount - aDiscount;
      case 'rating':
        return b.rating - a.rating;
      default:
        return a.featured === b.featured ? 0 : a.featured ? -1 : 1;
    }
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 bg-gradient-to-r from-red-50 to-pink-50">
        <div className="container mx-auto px-4 py-12 sm:py-16 text-center">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <span className="text-3xl sm:text-4xl">🔥</span>
            <h1 className="text-4xl sm:text-5xl font-light text-gray-900 tracking-tight">Sale</h1>
            <span className="text-3xl sm:text-4xl">🔥</span>
          </div>
          <p className="text-gray-500 text-xs sm:text-sm tracking-wide uppercase mb-3">
            Up to 50% Off Selected Items
          </p>
          <p className="text-red-600 font-semibold text-base sm:text-lg">
            {saleProducts.length} Products on Sale
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filters Sidebar */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="sticky top-24 space-y-10">
              {/* Category Filter */}
              <div>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                  Category
                </h3>
                <div className="space-y-1">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={`block w-full text-left px-0 py-2 transition-colors text-sm capitalize ${
                      selectedCategory === null
                        ? 'text-gray-900 font-medium'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    All Products
                  </button>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`block w-full text-left px-0 py-2 transition-colors text-sm capitalize ${
                        selectedCategory === cat
                          ? 'text-gray-900 font-medium'
                          : 'text-gray-500 hover:text-gray-900'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort By */}
              <div>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                  Sort By
                </h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-0 py-2 bg-transparent border-0 border-b border-gray-300 focus:outline-none focus:border-gray-900 text-sm text-gray-900 cursor-pointer appearance-none"
                >
                  <option value="featured">Featured</option>
                  <option value="discount">Biggest Discount</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {sortedProducts.length === 0 ? (
              <div className="text-center py-24">
                <p className="text-gray-400 text-sm">No sale products found</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {sortedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
