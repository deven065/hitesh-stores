'use client';

import { useState } from 'react';
import ProductCard from '@/app/components/ProductCard';
import { products } from '@/data/products';

export default function MenPage() {
  const menProducts = products.filter((p) => p.category === 'men');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const subcategories = Array.from(new Set(menProducts.map((p) => p.subcategory)));

  let filteredProducts = selectedSubcategory
    ? menProducts.filter((p) => p.subcategory === selectedSubcategory)
    : menProducts;

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
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
          <h1 className="text-4xl sm:text-5xl font-light text-gray-900 mb-3 tracking-tight">Men's Clothing</h1>
          <p className="text-gray-500 text-xs sm:text-sm tracking-wide uppercase">
            {menProducts.length} Products
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
                    onClick={() => setSelectedSubcategory(null)}
                    className={`block w-full text-left px-0 py-2 transition-colors text-sm ${
                      selectedSubcategory === null
                        ? 'text-gray-900 font-medium'
                        : 'text-gray-500 hover:text-gray-900'
                    }`}
                  >
                    All Products
                  </button>
                  {subcategories.map((sub) => (
                    <button
                      key={sub}
                      onClick={() => setSelectedSubcategory(sub)}
                      className={`block w-full text-left px-0 py-2 transition-colors text-sm ${
                        selectedSubcategory === sub
                          ? 'text-gray-900 font-medium'
                          : 'text-gray-500 hover:text-gray-900'
                      }`}
                    >
                      {sub}
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
