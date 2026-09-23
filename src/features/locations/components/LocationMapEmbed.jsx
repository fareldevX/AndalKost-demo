import React from 'react';
import { Compass } from 'lucide-react';

/**
 * Embedded Google Maps container with live location tag
 */
export default function LocationMapEmbed({ mapUrl, locationName }) {
  return (
    <div className="lg:col-span-7 h-[350px] sm:h-[420px] rounded-2xl overflow-hidden border border-slate-700 bg-slate-900 relative shadow-inner">
      <iframe
        title={locationName}
        src={mapUrl}
        className="w-full h-full border-0 filter grayscale contrast-125 opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
        loading="lazy"
        allowFullScreen
      />
      <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-bold text-orange-400 flex items-center gap-1.5 pointer-events-none">
        <Compass className="w-4 h-4 animate-spin-slow" />
        <span>Live Location Map</span>
      </div>
    </div>
  );
}
