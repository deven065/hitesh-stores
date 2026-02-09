'use client';

import { useState } from 'react';
import ProductCard from '@/app/components/ProductCard';
import { products } from '@/data/products';

export default function AccessoriesPage() {
  const accessoriesProducts = products.filter((p) => p.category === 'accessories');
  const [sortBy, setSortBy] = useState('featured');

  // Sort products
  const sortedProducts = [...accessoriesProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return a.new === b.new ? 0 : a.new ? -1 : 1;
      case 'rating':
        return b.rating - a.rating;
      default:
        return a.featured === b.featured ? 0 : a.featured ? -1 : 1;
    }
  });

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-12 sm:py-16 text-center">
          <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-3 tracking-tight">Accessories</h1>
          <p className="text-gray-500 text-xs sm:text-sm tracking-wide uppercase">
            {accessoriesProducts.length} Products
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Filters Sidebar */}
          <aside className="lg:w-56 flex-shrink-0">
            <div className="sticky top-24 space-y-10">
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
                  <option value="newest">Newest</option>
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
                <p className="text-gray-400 text-sm">No products found</p>
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
