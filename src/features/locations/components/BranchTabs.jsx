import React from 'react';
import { MapPin } from 'lucide-react';

/**
 * Branch switcher tab buttons
 */
export default function BranchTabs({ locations, selectedLocationId, onSelectLocation }) {
  return (
    <div className="mt-10 flex flex-wrap justify-center gap-3">
      {locations.map((loc) => (
        <button
          key={loc.id}
          onClick={() => onSelectLocation(loc.id)}
          className={`px-5 py-3 rounded-2xl font-bold text-sm transition-all flex items-center gap-2 ${
            selectedLocationId === loc.id
              ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          <MapPin className="w-4 h-4" />
          <span>{loc.name}</span>
        </button>
      ))}
    </div>
  );
}
