import React from 'react';

/**
 * Individual amenity card with icon and description
 */
export default function AmenityCard({ amenity }) {
  const IconComp = amenity.icon;

  return (
    <div className="bg-white rounded-2xl p-8 border border-slate-200/80 hover:border-orange-300 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
      <div className="w-14 h-14 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center group-hover:bg-orange-500 group-hover:text-white transition-colors duration-300 mb-6">
        <IconComp className="w-7 h-7" />
      </div>
      <p className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-1">
        {amenity.subtitle}
      </p>
      <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
        {amenity.title}
      </h3>
      <p className="text-slate-600 text-sm mt-3 leading-relaxed">
        {amenity.description}
      </p>
    </div>
  );
}
