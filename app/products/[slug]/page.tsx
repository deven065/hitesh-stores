'use client';

import { useState, use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { products } from '@/data/products';
import ProductCard from '@/app/components/ProductCard';
import Reviews from '@/app/components/Reviews';
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
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center gap-2 text-xs text-gray-400 font-light">
            <Link href="/" className="hover:text-gray-900 transition-colors">
              Home
            </Link>
            <span className="text-gray-300">/</span>
            <Link href={`/shop/${product.category}`} className="hover:text-gray-900 transition-colors capitalize">
              {product.category}
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-900 font-medium truncate">{product.name}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="bg-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            {/* Images */}
            <div>
              <div className="relative bg-gray-50 overflow-hidden mb-3">
                <Image
                  src={product.images[activeImage]}
                  alt={product.name}
                  width={800}
                  height={1000}
                  className="w-full aspect-auto h-auto object-contain"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(index)}
                    className={`relative aspect-square overflow-hidden transition-opacity duration-200 ${
                      activeImage === index ? 'ring-1 ring-gray-900 ring-offset-2 opacity-100' : 'opacity-50 hover:opacity-100'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      fill
                      className="object-cover w-full h-full"
                      sizes="100px"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="max-w-[520px] mr-auto">
              {/* Buying Block */}
              <div className="space-y-4">
                {(product.new || product.bestSeller) && (
                  <div className="flex gap-3">
                    {product.new && (
                      <span className="text-gray-500 text-[11px] font-medium uppercase tracking-[0.15em]">
                        New Arrival
                      </span>
                    )}
                    {product.bestSeller && (
                      <span className="text-gray-500 text-[11px] font-medium uppercase tracking-[0.15em]">
                        Best Seller
                      </span>
                    )}
                  </div>
                )}

                <h1 className="text-[32px] md:text-[36px] font-semibold text-gray-900 tracking-tight leading-[1.15]">{product.name}</h1>

                <div className="flex items-center gap-2">
                  <span className="text-gray-900 text-sm font-light">{product.rating}</span>
                  <span className="text-gray-300">·</span>
                  <span className="text-xs text-gray-400 font-light hover:text-gray-900 transition-colors cursor-pointer">{product.reviewCount} Reviews</span>
                </div>

                <div className="flex items-center gap-2">
                  <p className="text-2xl font-semibold text-gray-900">₹{product.price.toFixed(2)}</p>
                  {product.originalPrice && (
                    <>
                      <span className="text-lg text-gray-400 line-through">
                        ₹{product.originalPrice.toFixed(2)}
                      </span>
                      <span className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-0.5">
                        {Math.round(
                          ((product.originalPrice - product.price) / product.originalPrice) * 100
                        )}% OFF
                      </span>
                    </>
                  )}
                </div>

                <p className="text-sm leading-relaxed text-[var(--text-muted)]">{product.description}</p>

                {/* Size Selection */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-xs uppercase tracking-wide opacity-60">Size</label>
                    <Link href="/size-guide" className="text-xs text-gray-400 hover:text-gray-900 font-light transition-colors">
                      Size Guide
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-6 py-3 md:px-4 md:py-2 border rounded-md text-base md:text-sm font-medium transition-colors min-w-[48px] ${
                          selectedSize === size
                            ? 'border-gray-900 bg-gray-900 text-white'
                            : 'border-gray-200 text-gray-700 hover:border-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Color Selection */}
                <div>
                  <label className="text-xs uppercase tracking-wide opacity-60 block mb-3">Color</label>
                  <div className="flex flex-wrap gap-2">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        className={`px-6 py-3 md:px-4 md:py-2 border rounded-md text-base md:text-sm font-medium transition-colors ${
                          selectedColor === color
                            ? 'border-gray-900 bg-gray-900 text-white'
                            : 'border-gray-200 text-gray-700 hover:border-gray-900 hover:bg-gray-50'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* CTA Zone */}
                <div className="mt-6 space-y-3">
                  {/* Quantity */}
                  <div>
                    <label className="text-xs uppercase tracking-wide opacity-60 block mb-3">Quantity</label>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center border border-gray-200 rounded-md">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="px-5 py-2 hover:bg-gray-50 text-base transition-colors"
                        >
                          −
                        </button>
                        <span className="px-5 py-2 text-sm border-x border-gray-200 min-w-[50px] text-center">{quantity}</span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="px-5 py-2 hover:bg-gray-50 text-base transition-colors"
                        >
                          +
                        </button>
                      </div>
                      {product.inStock && (
                        <span className="text-gray-500 text-xs uppercase tracking-wider">In Stock</span>
                      )}
                    </div>
                  </div>

                  {/* Add to Cart */}
                  <button
                    onClick={handleAddToCart}
                    disabled={!product.inStock}
                    className={`w-full h-12 rounded-md text-sm font-medium uppercase tracking-widest transition-colors ${
                      product.inStock
                        ? 'bg-gray-900 text-white hover:bg-gray-800'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </button>

                  {showSuccess && (
                    <div className="w-full py-3 border border-gray-900 bg-white text-center">
                      <span className="text-xs font-medium text-gray-900 tracking-wide">
                        ✓ Added to cart
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Details Block */}
              <div className="mt-8 pt-6 border-t border-[var(--border-subtle)] space-y-3">
                {product.material && (
                  <div className="flex gap-4">
                    <span className="text-[10px] font-medium text-gray-500 uppercase tracking-[0.2em] w-24">Material</span>
                    <span className="text-sm font-light text-gray-700">{product.material}</span>
                  </div>
                )}
                {product.careInstructions && (
                  <div className="flex gap-4">
                    <span className="text-[10px] font-medium text-gray-500 uppercase tracking-[0.2em] w-24">Care</span>
                    <span className="text-sm font-light text-gray-700">{product.careInstructions}</span>
                  </div>
                )}
                <div className="flex gap-4">
                  <span className="text-[10px] font-medium text-gray-500 uppercase tracking-[0.2em] w-24">Category</span>
                  <span className="text-sm font-light text-gray-700 capitalize">
                    {product.category} / {product.subcategory}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Customer Reviews */}
        <Reviews reviews={product.reviews} rating={product.rating} reviewCount={product.reviewCount} />

        {/* Testimonials Section */}
        <div className="mt-16 pt-12 border-t border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                "Absolutely love the quality and fit. The fabric feels premium and the attention to detail is impressive."
              </p>
              <p className="text-xs text-gray-500 font-medium">— Sarah M.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                "Perfect fit and excellent customer service. This is my third purchase and won't be my last!"
              </p>
              <p className="text-xs text-gray-500 font-medium">— Michael R.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="flex items-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                "Great value for money. The style is timeless and the quality exceeds expectations at this price point."
              </p>
              <p className="text-xs text-gray-500 font-medium">— Jessica L.</p>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16 pt-10 border-t border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">You May Also Like</h2>
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
