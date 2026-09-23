import React from 'react';
import { MapPin, Users, Clock, Search } from 'lucide-react';
import { LOCATIONS } from '../../../../features/locations/data/locations';

/**
 * Quick search and filter bar displayed in the hero section
 */
export default function QuickSearchBar({
  selectedLocation,
  onLocationChange,
  selectedAudience,
  onAudienceChange
}) {
  const handleScrollToRooms = () => {
    const roomSec = document.getElementById('rooms');
    if (roomSec) {
      roomSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="mt-12 lg:mt-16 bg-white rounded-2xl p-4 sm:p-6 shadow-xl border border-slate-200/80 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
        {/* Select Branch */}
        <div className="space-y-1">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-orange-500" />
            <span>Preferred Branch</span>
          </label>
          <select
            value={selectedLocation}
            onChange={(e) => onLocationChange(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
          >
            {LOCATIONS.map((loc) => (
              <option key={loc.id} value={loc.id}>
                {loc.name}
              </option>
            ))}
          </select>
        </div>

        {/* Select Target Audience */}
        <div className="space-y-1">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-orange-500" />
            <span>Tenant Category</span>
          </label>
          <select
            value={selectedAudience}
            onChange={(e) => onAudienceChange(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer"
          >
            <option value="All">All Categories</option>
            <option value="Student">University Student</option>
            <option value="Professional">Young Professional</option>
          </select>
        </div>

        {/* Move in timing */}
        <div className="space-y-1">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-orange-500" />
            <span>Move-in Timeline</span>
          </label>
          <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500 cursor-pointer">
            <option>Immediate / This Week</option>
            <option>Next Month</option>
            <option>Next Semester (2-3 Months)</option>
          </select>
        </div>

        {/* Search CTA */}
        <div className="pt-1">
          <button
            onClick={handleScrollToRooms}
            className="w-full py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-2"
          >
            <Search className="w-4 h-4" />
            <span>Find Available Rooms</span>
          </button>
        </div>
      </div>
    </div>
  );
}
