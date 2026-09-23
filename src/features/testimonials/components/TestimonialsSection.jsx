import React from 'react';
import SectionHeader from '../../../components/ui/SectionHeader';
import { TESTIMONIALS } from '../data/testimonials';
import TestimonialCard from './TestimonialCard';

/**
 * Tenant testimonials and social proof section
 */
export default function TestimonialsSection({ testimonials = TESTIMONIALS }) {
  return (
    <section id="reviews" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Tenant Testimonials"
          title="Loved by Students & Professionals"
          description="Read what our current long-term residents have to say about living in AndalKost properties."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((review, idx) => (
            <TestimonialCard key={idx} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
