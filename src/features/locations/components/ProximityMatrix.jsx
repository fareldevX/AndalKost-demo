import React from 'react';

/**
 * Points of interest proximity matrix
 */
export default function ProximityMatrix({ pointsOfInterest }) {
  return (
    <div className="space-y-3 pt-2">
      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
        Nearby Accessibility Points:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {pointsOfInterest.map((poi, idx) => (
          <div
            key={idx}
            className="bg-slate-900/60 p-3 rounded-xl border border-slate-700/60 flex items-center justify-between"
          >
            <span className="text-xs font-semibold text-slate-200">{poi.name}</span>
            <span className="text-[11px] font-bold text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded border border-orange-500/20 shrink-0 ml-2">
              {poi.distance}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
