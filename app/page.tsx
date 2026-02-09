import Link from 'next/link';
import Image from 'next/image';
import ProductCard from './components/ProductCard';
import TestimonialCarousel from './components/TestimonialCarousel';
import { products } from '@/data/products';

export default function Home() {
  const featuredProducts = products.filter((p) => p.featured);
  const newArrivals = products.filter((p) => p.new);

  return (
    <div>
      {/* Urgency Banner */}
      <div className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white text-center py-3 text-xs sm:text-sm font-semibold shadow-lg relative overflow-hidden px-2">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
        <p className="relative z-10">
          <span className="hidden sm:inline">🔥 <span className="font-bold">Limited Time Offer:</span> Extra 20% OFF on orders above ₹3,000 | Use code: <span className="bg-white/20 px-2 py-0.5 rounded font-bold">SAVE20</span></span>
          <span className="sm:hidden">🔥 20% OFF ₹3,000+ | Code: <span className="bg-white/20 px-2 py-0.5 rounded font-bold">SAVE20</span></span>
        </p>
      </div>

      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[700px] bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 overflow-hidden">
        {/* Animated background patterns */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-white rounded-full mix-blend-overlay filter blur-xl animate-blob animation-delay-4000" />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        
        <div className="w-full h-full flex flex-col justify-between relative z-10 px-4 py-12 md:py-16">
          <div className="flex-1 flex items-center justify-center">
            <div className="max-w-3xl text-white animate-fade-in-up text-center mx-auto">
              <div className="flex justify-center mb-4">
                <span className="bg-white/20 backdrop-blur-md text-white px-2.5 py-1.5 rounded-md text-xs font-bold border border-white/30">
                  ✨ New Collection 2026
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                Shop everyday fashion you&apos;ll actually love to wear
              </h1>
              <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-white/90 font-normal leading-relaxed px-4 sm:px-0">
                Explore handpicked styles for men, women and kids – designed for comfort, quality and easy returns.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Primary CTA - Shop Women */}
                <Link
                  href="/shop/women"
                  className="group flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-semibold text-slate-900 shadow-sm transition-all duration-200 hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 min-w-[160px]"
                >
                  Shop Women
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                {/* Secondary CTA - Shop Men */}
                <Link
                  href="/shop/men"
                  className="group flex h-12 items-center justify-center gap-2 rounded-full border border-white/90 px-8 text-sm font-semibold text-white transition-all duration-200 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70 min-w-[160px]"
                >
                  Shop Men
                  <svg
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
            
          {/* Stats Display */}
          <div className="flex justify-center items-center w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl animate-fade-in-up">
              {/* Happy Customers */}
            <div className="text-center">
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-1 sm:mb-2 tracking-tight">50K+</p>
              <p className="text-white/90 text-xs sm:text-sm md:text-base font-medium">Happy Customers</p>
            </div>

            {/* Average Rating */}
            <div className="text-center">
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-1 sm:mb-2 tracking-tight">4.8★</p>
              <p className="text-white/90 text-xs sm:text-sm md:text-base font-medium">Average Rating</p>
            </div>

            {/* Products Sold */}
            <div className="text-center">
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-1 sm:mb-2 tracking-tight">100K+</p>
              <p className="text-white/90 text-xs sm:text-sm md:text-base font-medium">Products Sold</p>
            </div>

            {/* Customer Support */}
            <div className="text-center">
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-1 sm:mb-2 tracking-tight">24/7</p>
              <p className="text-white/90 text-xs sm:text-sm md:text-base font-medium">Customer Support</p>
            </div>
            </div>
          </div>
          <br></br>
          <br></br>
        </div>
      </section>

      {/* Categories Section */}
      <br></br>
      <section className="py-24 bg-white">
        <div className="w-full">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Shop Now
            </h3>
            <br />
            <br />
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">Shop by Category</h2>
            <br></br>
            <p className="text-gray-600 text-lg">Find your perfect style</p>
            <br />
            <br />
          </div>
          <div className="flex flex-wrap justify-center items-center gap-4 px-4">
            <Link
              href="/shop/men"
              className="group relative h-64 sm:h-72 w-44 sm:w-52 md:w-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src="https://images.unsplash.com/photo-1490114538077-0a7f8cb49891?w=600&q=80"
                alt="Men's Fashion"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300" />
              <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-md px-2.5 py-1.5 rounded-md text-xs font-bold text-white border border-white/30">
                2,500+ Items
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 sm:pb-8">
                <h3 className="text-white text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 group-hover:scale-110 transition-transform">Men</h3>
                <span className="text-white/80 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity">Shop Now → From ₹499</span>
              </div>
            </Link>

            <Link
              href="/shop/women"
              className="group relative h-64 sm:h-72 w-44 sm:w-52 md:w-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&q=80"
                alt="Women's Fashion"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300" />
              <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-md px-2.5 py-1.5 rounded-md text-xs font-bold text-white border border-white/30">
                3,200+ Items
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 sm:pb-8">
                <h3 className="text-white text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 group-hover:scale-110 transition-transform">Women</h3>
                <span className="text-white/80 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity">Shop Now → From ₹399</span>
              </div>
            </Link>

            <Link
              href="/shop/kids"
              className="group relative h-64 sm:h-72 w-44 sm:w-52 md:w-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src="https://images.unsplash.com/photo-1503944583220-79d8926ad5e2?w=600&q=80"
                alt="Kids' Fashion"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300" />
              <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-md px-2.5 py-1.5 rounded-md text-xs font-bold text-white border border-white/30">
                1,800+ Items
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-6 sm:pb-8">
                <h3 className="text-white text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 group-hover:scale-110 transition-transform">Kids</h3>
                <span className="text-white/80 text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity">Shop Now → From ₹299</span>
              </div>
            </Link>

            <Link
              href="/shop/accessories"
              className="group relative h-64 sm:h-72 w-44 sm:w-52 md:w-64 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Image
                src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=600&q=80"
                alt="Accessories"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/80 transition-all duration-300" />
              <div className="absolute top-2 right-2 bg-white/20 backdrop-blur-md px-2.5 py-1.5 rounded-md text-xs font-bold text-white border border-white/30">
                950+ Items
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-end pb-8">
                <h3 className="text-white text-3xl font-bold mb-2 group-hover:scale-110 transition-transform">Accessories</h3>
                <span className="text-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity">Shop Now → From ₹199</span>
              </div>
            </Link>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-gradient-to-b from-white via-blue-50/30 to-white">
        <div className="w-full">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Trending Now
            </h3>
            <br />
            <br />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Featured Products</h2>
              <br></br>
            <p className="text-gray-600 text-lg">Handpicked favorites just for you</p>
            <br />
            <br />
          </div>
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <br></br>
      <br></br>
      {newArrivals.length > 0 && (
        <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-purple-50">
          <div className="w-full">
            <div className="text-center mb-16">
              <br></br>
              <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Just Dropped
              </h3>
              <br />
              <br />
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">New Arrivals</h2>
              <br></br>
              <p className="text-gray-600 text-lg">Fresh styles just dropped</p>
              <br></br>
            </div>
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {newArrivals.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </div>
          <br></br>
          <br></br>
        </section>
      )}

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <br></br>
        <div className="w-full">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Customer Reviews
            </h3>
            <br></br>
            <br></br>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <br></br>
            <p className="text-gray-600 text-lg">Join thousands of satisfied shoppers</p>
            <br></br>
            <br></br>
          </div>
          <TestimonialCarousel />
          <br></br>
          <br></br>
          <br></br>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 relative overflow-hidden">
        <br></br>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="w-full relative z-10">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
              Special Offer
            </h3>
            <br></br>
            <br></br>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get 15% Off Your First Order</h2>
            <br></br>
            <p className="text-white/90 text-lg">
              Subscribe to our newsletter and stay updated with latest trends, exclusive offers, and style tips!
            </p>
            <br></br>
            <br></br>
          </div>
          <div className="flex justify-center px-4">
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center max-w-xl w-full">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full sm:flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-full text-gray-900 placeholder-gray-300 focus:outline-none focus:ring-4 focus:ring-white/30 text-sm sm:text-base border-2 border-white text-center"
              />
              <button className="w-full sm:w-auto bg-white text-purple-600 font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl whitespace-nowrap text-sm sm:text-base">
                Subscribe Now
              </button>
            </div>
          </div>
          <br></br>
          <p className="text-white/70 text-xs sm:text-sm mt-4 text-center">
            🎁 Plus get early access to sales and new arrivals
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 mt-6 sm:mt-8 text-white/80 text-xs sm:text-sm px-4">
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              No spam, ever
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Unsubscribe anytime
            </span>
          </div>
          <br></br>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <br></br>
        <div className="w-full">
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Benefits
            </h3>
            <br></br>
            <br></br>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Shop With Us</h2>
            <br></br>
            <p className="text-gray-600 text-lg">Your satisfaction is our priority</p>
            <br></br>
            <br></br>
          </div>
          <div className="flex justify-center px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full">
            <div className="flex flex-col items-center p-4 sm:p-6 bg-blue-500 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 min-h-[180px] sm:min-h-[200px]">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                  />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-base sm:text-lg mb-2 text-white">Free Shipping</h3>
                <p className="text-blue-100 text-xs sm:text-sm">On orders over ₹2,500</p>
              </div>
            </div>

            <div className="flex flex-col items-center p-4 sm:p-6 bg-green-500 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 min-h-[180px] sm:min-h-[200px]">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-base sm:text-lg mb-2 text-white">Quality Guarantee</h3>
                <p className="text-green-100 text-xs sm:text-sm">Premium materials only</p>
              </div>
            </div>

            <div className="flex flex-col items-center p-4 sm:p-6 bg-purple-500 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 min-h-[180px] sm:min-h-[200px]">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-base sm:text-lg mb-2 text-white">30-Day Returns</h3>
                <p className="text-purple-100 text-xs sm:text-sm">Easy return policy</p>
              </div>
            </div>

            <div className="flex flex-col items-center p-4 sm:p-6 bg-pink-500 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 min-h-[180px] sm:min-h-[200px]">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-3 sm:mb-4">
                <svg
                  className="w-6 h-6 sm:w-8 sm:h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
              <div className="text-center">
                <h3 className="font-bold text-base sm:text-lg mb-2 text-white">Secure Payment</h3>
                <p className="text-pink-100 text-xs sm:text-sm">100% secure transactions</p>
              </div>
            </div>
          </div>
          </div>

          {/* Payment Methods */}
          <div className="mt-16 text-center">
            <br></br>
            <br></br>
            <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              We Accept
            </h3>
            <br></br>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-blue-500">
                <span className="font-black text-lg sm:text-xl md:text-2xl text-white tracking-wider">VISA</span>
              </div>
              <div className="bg-gradient-to-r from-orange-500 to-red-600 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-orange-400">
                <span className="font-black text-lg sm:text-xl md:text-2xl text-white tracking-wide">Mastercard</span>
              </div>
              <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-blue-400">
                <span className="font-black text-lg sm:text-xl md:text-2xl text-white tracking-wide">PayPal</span>
              </div>
              <div className="bg-gradient-to-r from-green-600 to-green-700 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-green-500">
                <span className="font-black text-lg sm:text-xl md:text-2xl text-white tracking-wider">UPI</span>
              </div>
              <div className="bg-gradient-to-r from-gray-700 to-gray-800 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 border-2 border-gray-600">
                <span className="font-bold text-base sm:text-lg md:text-xl text-white tracking-wide">Net Banking</span>
              </div>
            </div>
            <br></br>
            <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                SSL Secured
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                PCI Compliant
              </span>
            </div>
            <br></br>
          </div>
        </div>
      </section>
    </div>
  );
}

