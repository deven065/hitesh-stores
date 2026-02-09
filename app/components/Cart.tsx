'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Link from 'next/link';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Cart({ isOpen, onClose }: CartProps) {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={onClose}
      />

      {/* Cart Drawer */}
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 p-3 sm:p-4">
          <h2 className="text-base sm:text-lg font-bold">Shopping Cart ({items.length})</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 mb-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
              <p className="text-base sm:text-lg font-medium">Your cart is empty</p>
              <button
                onClick={onClose}
                className="mt-4 text-sm sm:text-base text-blue-600 hover:text-blue-700 font-medium"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={`${item.product.id}-${item.size}-${item.color}`}
                  className="flex gap-4 border-b border-gray-200 pb-4"
                >
                  {/* Image */}
                  <div className="relative w-16 h-20 sm:w-20 sm:h-24 bg-gray-100 rounded flex-shrink-0">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover rounded"
                      sizes="80px"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/products/${item.product.slug}`}
                      onClick={onClose}
                      className="text-sm sm:text-base font-medium text-gray-900 hover:text-blue-600 line-clamp-2"
                    >
                      {item.product.name}
                    </Link>
                    <div className="text-xs sm:text-sm text-gray-600 mt-1">
                      <p>Size: {item.size}</p>
                      <p>Color: {item.color}</p>
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1 sm:gap-2 border border-gray-300 rounded">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.size,
                              item.color,
                              item.quantity - 1
                            )
                          }
                          className="px-1.5 sm:px-2 py-1 hover:bg-gray-100 text-sm sm:text-base"
                        >
                          -
                        </button>
                        <span className="px-1.5 sm:px-2 text-sm sm:text-base">{item.quantity}</span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.product.id,
                              item.size,
                              item.color,
                              item.quantity + 1
                            )
                          }
                          className="px-1.5 sm:px-2 py-1 hover:bg-gray-100 text-sm sm:text-base"
                        >
                          +
                        </button>
                      </div>
                      <p className="text-sm sm:text-base font-bold text-gray-900">
                        ₹{(item.product.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() =>
                      removeFromCart(item.product.id, item.size, item.color)
                    }
                    className="text-gray-400 hover:text-red-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-3 sm:p-4 space-y-3 sm:space-y-4">
            <div className="flex justify-between text-base sm:text-lg font-bold">
              <span>Total:</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>
            <Link
              href="/checkout"
              onClick={onClose}
              className="block w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center font-black text-base sm:text-lg py-3.5 sm:py-5 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.02] active:scale-[0.98]"
            >
              <span className="flex items-center justify-center gap-2">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                Proceed to Checkout
              </span>
            </Link>
            <button
              onClick={onClose}
              className="block w-full border-2 border-gray-300 text-gray-700 text-center font-bold text-base sm:text-lg py-3.5 sm:py-5 rounded-2xl hover:bg-gray-100 hover:border-gray-400 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
