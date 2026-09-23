import React from 'react';
import { Star } from 'lucide-react';

/**
 * Reusable star rating renderer
 */
export default function StarRating({
  rating = 5,
  sizeClass = 'w-4 h-4',
  className = ''
}) {
  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {[...Array(rating)].map((_, i) => (
        <Star
          key={i}
          className={`${sizeClass} text-amber-400 fill-amber-400`}
        />
      ))}
    </div>
  );
}
