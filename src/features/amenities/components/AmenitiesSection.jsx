import React from 'react';
import SectionHeader from '../../../components/ui/SectionHeader';
import { AMENITIES } from '../data/amenities';
import AmenityCard from './AmenityCard';

/**
 * Amenities & facilities feature section
 */
export default function AmenitiesSection({
  amenities = AMENITIES,
  onOpenInquiry
}) {
  return (
    <section id="amenities" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Designed For Modern Comfort"
          title="Everything You Need for Work, Study & Relaxation"
          description="We eliminate standard boarding house headaches. Enjoy hotel-grade facilities with the warmth and independence of home."
        />

        {/* Amenities Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((amenity, idx) => (
            <AmenityCard key={idx} amenity={amenity} />
          ))}
        </div>

        {/* Bonus Facilities Banner */}
        <div className="mt-12 bg-gradient-to-r from-orange-600 to-amber-600 rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold">Looking for specific custom requirements?</h3>
            <p className="text-orange-100 text-sm max-w-xl">
              We also offer gender-separated corridors, motor parking slots, community quiet hours, and monthly guest passes.
            </p>
          </div>
          <button
            onClick={() => onOpenInquiry?.()}
            className="px-6 py-3.5 rounded-xl bg-white text-orange-600 font-bold text-sm hover:bg-orange-50 shadow-md transition-all shrink-0"
          >
            Ask House Manager
          </button>
        </div>
      </div>
    </section>
  );
}
