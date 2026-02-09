'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useCart } from '@/context/CartContext';
import Cart from './Cart';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { totalItems } = useCart();

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-sm">
        {/* Top Banner */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 text-white text-center py-2 text-xs sm:text-sm font-medium px-2">
          <span className="hidden sm:inline">🎉 Free shipping on orders over ₹2,500 | 30-day returns</span>
          <span className="sm:hidden">🎉 Free shipping ₹2,500+ | 30-day returns</span>
        </div>

        {/* Main Header */}
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="text-lg sm:text-xl md:text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 hover:from-purple-600 hover:to-pink-500 transition-all duration-300">
              HITESH STORES
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                href="/shop/men"
                className="text-gray-700 hover:text-blue-600 font-semibold transition-colors relative group"
              >
                Men
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/shop/women"
                className="text-gray-700 hover:text-blue-600 font-semibold transition-colors relative group"
              >
                Women
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/shop/kids"
                className="text-gray-700 hover:text-blue-600 font-semibold transition-colors relative group"
              >
                Kids
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/shop/accessories"
                className="text-gray-700 hover:text-blue-600 font-semibold transition-colors relative group"
              >
                Accessories
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/sale"
                className="text-red-600 hover:text-red-700 font-bold transition-colors relative group"
              >
                Sale
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-red-600 to-pink-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Search */}
              <button className="hidden md:block p-2.5 text-gray-600 hover:text-gray-900 transition-colors">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>

              {/* Account */}
              <Link
                href="/account"
                className="hidden md:block p-2.5 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </Link>

              {/* Cart */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2.5 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-gray-900 text-white text-xs font-light rounded-full h-4 w-4 flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2.5 text-gray-600 hover:text-gray-900 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gray-200">
              <div className="flex flex-col gap-4">
                <Link
                  href="/shop/men"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Men
                </Link>
                <Link
                  href="/shop/women"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Women
                </Link>
                <Link
                  href="/shop/kids"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Kids
                </Link>
                <Link
                  href="/shop/accessories"
                  className="text-gray-700 hover:text-blue-600 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Accessories
                </Link>
                <Link
                  href="/sale"
                  className="text-red-600 hover:text-red-700 font-bold"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sale
                </Link>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Cart Drawer */}
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
}
