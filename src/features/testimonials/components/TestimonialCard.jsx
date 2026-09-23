import React from 'react';
import StarRating from '../../../components/ui/StarRating';

/**
 * Individual tenant testimonial review card
 */
export default function TestimonialCard({ review }) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
      <div className="space-y-4">
        <StarRating rating={review.rating} />
        <p className="text-slate-700 text-sm italic leading-relaxed">
          "{review.quote}"
        </p>
      </div>

      <div className="pt-6 border-t border-slate-100 flex items-center gap-3 mt-6">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-orange-500/30"
        />
        <div>
          <h4 className="text-sm font-bold text-slate-900">{review.name}</h4>
          <p className="text-xs font-medium text-orange-600">{review.role}</p>
          <p className="text-[10px] text-slate-400 mt-0.5">{review.branch}</p>
        </div>
      </div>
    </div>
  );
}
