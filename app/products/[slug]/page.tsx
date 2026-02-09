'use client';

import { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import ProductCard from '@/app/components/ProductCard';
import { useCart } from '@/context/CartContext';

export default function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = products.find((p) => p.slug === slug);
  const { addToCart } = useCart();

  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [activeImage, setActiveImage] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Link href="/shop/all" className="text-blue-600 hover:text-blue-700">
          Continue Shopping
        </Link>
      </div>
    );
  }

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    if (!selectedColor) {
      alert('Please select a color');
      return;
    }

    addToCart(product, quantity, selectedSize, selectedColor);
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="container mx-auto px-4 py-3 sm:py-4">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-400">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href={`/shop/${product.category}`} className="hover:text-gray-900 transition-colors capitalize">
              {product.category}
            </Link>
            <span>/</span>
            <span className="text-gray-900 truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6 sm:py-8">
        <div className="bg-white p-4 sm:p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {/* Images */}
            <div>
              <div className="relative aspect-[3/4] bg-gray-50 rounded overflow-hidden mb-3 sm:mb-4">
                <Image
                  src={product.images[activeImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-2 sm:gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative aspect-square bg-gray-50 rounded overflow-hidden transition-all ${
                      activeImage === index ? 'ring-1 ring-gray-900' : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="100px"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <div className="flex gap-2 mb-4">
                {product.new && (
                  <span className="text-gray-400 text-xs font-light uppercase tracking-widest">
                    New
                  </span>
                )}
                {product.bestSeller && (
                  <span className="text-gray-400 text-xs font-light uppercase tracking-widest">
                    Best Seller
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900 mb-3 sm:mb-4 tracking-tight">{product.name}</h1>

              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="flex items-center">
                  <span className="text-gray-900 text-sm sm:text-base font-light">{product.rating}</span>
                  <span className="text-gray-400 mx-1">·</span>
                  <span className="text-xs sm:text-sm text-gray-400 font-light">{product.reviewCount} reviews</span>
                </div>
              </div>

              <div className="flex flex-wrap items-baseline gap-2 sm:gap-3 mb-4 sm:mb-6">
                <span className="text-2xl sm:text-3xl font-light text-gray-900">
                  ₹{product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-base sm:text-lg text-gray-400 line-through font-light">
                      ₹{product.originalPrice.toFixed(2)}
                    </span>
                    <span className="text-xs sm:text-sm text-gray-400 font-light">
                      ({Math.round(
                        ((product.originalPrice - product.price) / product.originalPrice) * 100
                      )}% off)
                    </span>
                  </>
                )}
              </div>

              <p className="text-sm sm:text-base text-gray-500 mb-6 sm:mb-8 leading-relaxed font-light">{product.description}</p>

              {/* Size Selection */}
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center justify-between mb-3 sm:mb-4">
                  <label className="text-xs sm:text-sm font-light text-gray-900 uppercase tracking-wider">Size</label>
                  <Link href="/size-guide" className="text-xs sm:text-sm text-gray-400 hover:text-gray-900 font-light underline transition-colors">
                    Size Guide
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 sm:px-5 py-2 sm:py-2.5 border text-sm sm:text-base font-light transition-all ${
                        selectedSize === size
                          ? 'border-gray-900 bg-gray-900 text-white'
                          : 'border-gray-200 hover:border-gray-400 text-gray-900'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="mb-6 sm:mb-8">
                <label className="text-xs sm:text-sm font-light text-gray-900 uppercase tracking-wider block mb-3 sm:mb-4">Color</label>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 sm:px-5 py-2 sm:py-2.5 border text-sm sm:text-base font-light transition-all ${
                        selectedColor === color
                          ? 'border-gray-900 bg-gray-900 text-white'
                          : 'border-gray-200 hover:border-gray-400 text-gray-900'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div className="mb-6 sm:mb-8">
                <label className="text-xs sm:text-sm font-light text-gray-900 uppercase tracking-wider block mb-3 sm:mb-4">Quantity</label>
<div className="flex items-center gap-3 sm:gap-4">
                  <div className="flex items-center border border-gray-200">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-6 sm:px-8 py-3 sm:py-4 hover:bg-gray-50 text-base sm:text-lg font-light transition-colors"
                    >
                      −
                    </button>
                    <span className="px-8 sm:px-10 py-3 sm:py-4 font-light text-base sm:text-lg border-x border-gray-200 min-w-[60px] text-center">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-6 sm:px-8 py-3 sm:py-4 hover:bg-gray-50 text-base sm:text-lg font-light transition-colors"
                    >
                      +
                    </button>
                  </div>
                  {product.inStock ? (
                    <span className="text-gray-400 font-light text-xs sm:text-sm uppercase tracking-wider">In Stock</span>
                  ) : (
                    <span className="text-gray-400 font-light text-xs sm:text-sm uppercase tracking-wider">Out of Stock</span>
                  )}
                </div>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                disabled={!product.inStock}
                className={`w-full py-3.5 sm:py-4 font-light text-sm sm:text-base mb-3 sm:mb-4 transition-all uppercase tracking-widest ${
                  product.inStock
                    ? 'bg-gray-900 text-white hover:bg-gray-800'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>

              {showSuccess && (
                <div className="bg-gray-50 border border-gray-200 text-gray-900 px-3 sm:px-4 py-2 sm:py-3 mb-3 sm:mb-4 text-xs sm:text-sm font-light tracking-wide">
                  Added to cart
                </div>
              )}

              {/* Product Details */}
              <div className="border-t border-gray-100 pt-6 sm:pt-8 space-y-3 sm:space-y-4 text-xs sm:text-sm">
                {product.material && (
                  <div className="flex">
                    <span className="font-light text-gray-400 uppercase tracking-wider w-32">Material</span>
                    <span className="text-gray-900 font-light">{product.material}</span>
                  </div>
                )}
                {product.careInstructions && (
                  <div className="flex">
                    <span className="font-light text-gray-400 uppercase tracking-wider w-32">Care</span>
                    <span className="text-gray-900 font-light">{product.careInstructions}</span>
                  </div>
                )}
                <div className="flex">
                  <span className="font-light text-gray-400 uppercase tracking-wider w-32">Category</span>
                  <span className="text-gray-900 font-light capitalize">
                    {product.category} / {product.subcategory}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-gray-100">
            <h2 className="text-xl sm:text-2xl font-light text-gray-900 mb-6 sm:mb-8 tracking-tight">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
