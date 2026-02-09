'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  // Generate deterministic viewing count based on product ID (for consistent server/client rendering)
  const hash = product.id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const viewingCount = (hash % 15) + 3; // Range: 3-17
  const showLowStock = product.inStock && (hash % 10) > 6; // ~30% chance

  return (
    <Link href={`/products/${product.slug}`} className="group w-full">
      <div className="relative overflow-hidden rounded-2xl bg-gray-100 shadow-md hover:shadow-2xl transition-all duration-500">
        {/* Badges */}
        <div className="absolute top-2 left-2 z-10 flex flex-col gap-1.5">
          {product.new && (
            <span className="bg-white/20 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-md shadow-md border border-white/30">
              NEW
            </span>
          )}
          {discount > 0 && (
            <span className="bg-white/20 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-md shadow-md border border-white/30">
              -{discount}%
            </span>
          )}
          {product.bestSeller && (
            <span className="bg-white/20 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold px-2 sm:px-2.5 py-1 sm:py-1.5 rounded-md shadow-md border border-white/30">
              BEST SELLER
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          className="absolute top-2 right-2 z-10 w-8 h-8 sm:w-9 sm:h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:scale-110 transition-all duration-200 shadow-md group/heart"
          onClick={(e) => {
            e.preventDefault();
            // Wishlist logic here
          }}
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 group-hover/heart:text-red-500 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>

        {/* Viewing Count Badge */}
        <div className="absolute bottom-2 left-2 z-10 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded-md shadow-md">
          <span className="text-[10px] font-semibold text-gray-700 flex items-center gap-1">
            <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            {viewingCount} viewing
          </span>
        </div>

        {/* Image */}
        <div className="aspect-[3/4] relative overflow-hidden">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Quick view button */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <span className="bg-white text-gray-900 px-6 py-3 sm:px-10 sm:py-5 rounded-3xl font-black text-base sm:text-xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 hover:scale-110 border-2 border-gray-100">
              Quick View
            </span>
          </div>
        </div>

        {/* Low Stock Warning */}
        {showLowStock && (
          <div className="absolute bottom-10 left-2 z-10">
            <span className="bg-white/20 backdrop-blur-md text-white text-xs font-bold px-2.5 py-1.5 rounded-md shadow-md border border-white/30 animate-pulse">
              Only few left
            </span>
          </div>
        )}

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold text-lg">OUT OF STOCK</span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 px-1">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm sm:text-base font-semibold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <span className="text-yellow-400 text-base sm:text-lg">★</span>
            <span className="text-xs sm:text-sm font-semibold text-gray-700 ml-1">
              {product.rating}
            </span>
            <span className="text-[10px] sm:text-xs text-gray-500 ml-1">
              ({product.reviewCount})
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-lg sm:text-xl font-bold text-gray-900">
            ₹{product.price.toFixed(2)}
          </span>
          {product.originalPrice && (
            <>
              <span className="text-xs sm:text-sm text-gray-500 line-through">
                ₹{product.originalPrice.toFixed(2)}
              </span>
              <span className="text-[10px] sm:text-xs bg-red-100 text-red-700 px-1.5 sm:px-2 py-0.5 rounded-full font-semibold">
                Save {discount}%
              </span>
            </>
          )}
        </div>

        {/* Color Options */}
        <div className="flex gap-1 pt-1">
          {product.colors.slice(0, 4).map((color) => (
            <div
              key={color}
              className="w-4 h-4 rounded-full border border-gray-300"
              style={{
                backgroundColor:
                  color.toLowerCase().includes('blue')
                    ? '#3b82f6'
                    : color.toLowerCase().includes('black')
                    ? '#000'
                    : color.toLowerCase().includes('white')
                    ? '#fff'
                    : color.toLowerCase().includes('gray')
                    ? '#6b7280'
                    : color.toLowerCase().includes('red')
                    ? '#ef4444'
                    : color.toLowerCase().includes('pink')
                    ? '#ec4899'
                    : color.toLowerCase().includes('yellow')
                    ? '#eab308'
                    : color.toLowerCase().includes('navy')
                    ? '#1e3a8a'
                    : '#9ca3af',
              }}
              title={color}
            />
          ))}
          {product.colors.length > 4 && (
            <span className="text-xs text-gray-500 flex items-center">
              +{product.colors.length - 4}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
