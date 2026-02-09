'use client';

import { useState } from 'react';
import { Review } from '@/types';

interface ReviewsProps {
  reviews: Review[];
  rating: number;
  reviewCount: number;
}

export default function Reviews({ reviews, rating, reviewCount }: ReviewsProps) {
  const [sortBy, setSortBy] = useState<'recent' | 'helpful' | 'rating'>('recent');
  const [filterRating, setFilterRating] = useState<number | null>(null);

  // Calculate rating distribution
  const ratingDistribution = [5, 4, 3, 2, 1].map((star) => ({
    star,
    count: reviews.filter((r) => r.rating === star).length,
    percentage: (reviews.filter((r) => r.rating === star).length / reviews.length) * 100,
  }));

  // Filter and sort reviews
  let filteredReviews = filterRating
    ? reviews.filter((r) => r.rating === filterRating)
    : reviews;

  filteredReviews = [...filteredReviews].sort((a, b) => {
    if (sortBy === 'recent') {
      return new Date(b.date).getTime() - new Date(a.date).getTime();
    } else if (sortBy === 'helpful') {
      return b.helpful - a.helpful;
    } else {
      return b.rating - a.rating;
    }
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const renderStars = (rating: number, size: 'sm' | 'md' | 'lg' = 'md') => {
    const sizeClasses = {
      sm: 'w-3 h-3',
      md: 'w-4 h-4',
      lg: 'w-5 h-5',
    };

    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`${sizeClasses[size]} ${
              star <= rating ? 'text-gray-900' : 'text-gray-200'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div className="mt-20 sm:mt-24 pt-20 sm:pt-24 border-t border-gray-100">
      <h2 className="text-2xl sm:text-3xl font-light text-gray-900 mb-12 tracking-tight">
        Reviews
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
        {/* Rating Summary */}
        <div className="lg:col-span-1">
          <div className="border border-gray-200 p-8">
            <div className="text-center mb-6">
              <div className="text-5xl font-light text-gray-900 mb-2 tracking-tight">{rating}</div>
              {renderStars(Math.round(rating), 'lg')}
              <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-gray-500 mt-4">
                {reviewCount} Reviews
              </div>
            </div>

            {/* Rating Distribution */}
            <div className="mt-6 space-y-2">
              {ratingDistribution.map(({ star, count, percentage }) => (
                <button
                  key={star}
                  onClick={() => setFilterRating(filterRating === star ? null : star)}
                  className={`w-full flex items-center gap-3 text-sm hover:opacity-70 transition-opacity ${
                    filterRating === star ? 'opacity-100' : 'opacity-100'
                  }`}
                >
                  <span className="text-gray-900 font-light text-xs w-5">{star}</span>
                  <div className="flex-1 bg-gray-100 h-1.5 overflow-hidden">
                    <div
                      className="bg-gray-900 h-full transition-all"
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <span className="text-gray-400 font-light text-xs w-6 text-right">{count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Reviews List */}
        <div className="lg:col-span-2">
          {/* Sort Options */}
          <div className="flex items-center justify-between pb-4 mb-8 border-b border-gray-100">
            <div className="text-[11px] font-medium uppercase tracking-[0.15em] text-gray-500">
              {filterRating ? `${filteredReviews.length} ${filterRating}-Star Reviews` : `All Reviews`}
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'recent' | 'helpful' | 'rating')}
              className="text-xs border-none bg-transparent font-medium text-gray-900 focus:outline-none cursor-pointer"
            >
              <option value="recent">Most Recent</option>
              <option value="helpful">Most Helpful</option>
              <option value="rating">Highest Rating</option>
            </select>
          </div>

          {/* Reviews */}
          <div className="space-y-8">
            {filteredReviews.length > 0 ? (
              filteredReviews.map((review) => (
                <div key={review.id} className="pb-8 border-b border-gray-100 last:border-0">
                  <div className="flex items-center gap-2 mb-2">
                    {renderStars(review.rating, 'sm')}
                    {review.verified && (
                      <span className="text-[10px] text-gray-500">
                        Verified
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-sm font-medium text-gray-900 mb-2">{review.title}</h3>

                  <p className="text-sm leading-[1.7] text-gray-600 mb-3 font-light">
                    {review.comment}
                  </p>

                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                    <span className="font-medium text-gray-700">{review.userName}</span>
                    <span>·</span>
                    <span>{formatDate(review.date)}</span>
                    {review.size && (
                      <>
                        <span>·</span>
                        <span>Size {review.size}</span>
                      </>
                    )}
                    {review.fit && (
                      <>
                        <span>·</span>
                        <span className="font-medium text-gray-700">{review.fit}</span>
                      </>
                    )}
                  </div>

                  <button className="text-xs text-gray-400 hover:text-gray-900 transition-colors font-light">
                    Helpful ({review.helpful})
                  </button>
                </div>
              ))
            ) : (
              <div className="text-center py-12 text-gray-400 font-light text-sm">
                No reviews match your filter.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
