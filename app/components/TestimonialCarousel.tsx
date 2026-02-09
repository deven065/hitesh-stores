'use client';

import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    initials: 'PS',
    review: 'Amazing quality and fast delivery! The clothes fit perfectly and the fabric is premium. Will definitely order again.',
  },
  {
    id: 2,
    name: 'Rahul Kumar',
    initials: 'RK',
    review: 'Best online shopping experience! Great variety, reasonable prices, and excellent customer service. Highly recommended!',
  },
  {
    id: 3,
    name: 'Anita Mehta',
    initials: 'AM',
    review: 'Love the trendy collection! The return process was super easy too. This is now my go-to store for fashion.',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    initials: 'VS',
    review: 'Impressed with the quality of materials. The ethnic wear collection is stunning and authentic. Great value for money!',
  },
  {
    id: 5,
    name: 'Sneha Patel',
    initials: 'SP',
    review: 'Perfect fit and beautiful designs. Customer support was very helpful in choosing the right size. Very satisfied!',
  },
  {
    id: 6,
    name: 'Arjun Desai',
    initials: 'AD',
    review: 'The kids section has amazing options. My children love their new clothes and the quality is excellent. Will order again!',
  },
  {
    id: 7,
    name: 'Kavita Reddy',
    initials: 'KR',
    review: 'Fast shipping and beautiful packaging. The clothes look even better in person. Highly recommend this store!',
  },
  {
    id: 8,
    name: 'Amit Verma',
    initials: 'AV',
    review: 'Great collection of formal wear. The fabric quality is outstanding and the prices are very competitive. Very happy!',
  },
  {
    id: 9,
    name: 'Deepika Nair',
    initials: 'DN',
    review: 'Absolutely love the accessories collection! Everything arrived on time and the quality exceeded my expectations.',
  },
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Get 3 testimonials to display
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < 3; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 w-full px-2 sm:px-4">
      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="group flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-gray-200 hover:border-gray-400 transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md"
        aria-label="Previous testimonial"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-gray-900 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Testimonial Cards Container */}
      <div className="flex-1 max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {visibleTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl p-5 sm:p-8 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200">
              <div className="flex items-center gap-0.5 mb-3 sm:mb-5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-700 mb-5 sm:mb-7 leading-relaxed text-sm sm:text-[15px] min-h-[80px] sm:min-h-[90px]">
                &quot;{testimonial.review}&quot;
              </p>
              <div className="flex items-center gap-2 sm:gap-3 pt-4 sm:pt-6 border-t border-gray-100">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-700 rounded-full flex items-center justify-center text-white font-semibold text-xs sm:text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-xs sm:text-sm">{testimonial.name}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-[10px] sm:text-xs text-gray-500">Verified Buyer</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicator Dots */}
        <br></br>
        <div className="flex items-center justify-center gap-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-200 rounded-full ${
                index === currentIndex
                  ? 'w-8 h-2 bg-gray-800'
                  : 'w-2 h-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
        <br></br>
      </div>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="group flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-gray-200 hover:border-gray-400 transition-all duration-200 flex items-center justify-center shadow-sm hover:shadow-md"
        aria-label="Next testimonial"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600 group-hover:text-gray-900 transition-colors"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
