import React, { useMemo } from 'react';
import { MapPin, Calendar } from 'lucide-react';
import SectionHeader from '../../../components/ui/SectionHeader';
import { LOCATIONS } from '../data/locations';
import BranchTabs from './BranchTabs';
import ProximityMatrix from './ProximityMatrix';
import LocationMapEmbed from './LocationMapEmbed';

/**
 * Strategic locations and map explorer section
 */
export default function LocationsSection({
  locations = LOCATIONS,
  selectedLocationId,
  onSelectLocation,
  onOpenInquiry
}) {
  const activeLocation = useMemo(() => {
    return locations.find((loc) => loc.id === selectedLocationId) || locations[0];
  }, [locations, selectedLocationId]);

  return (
    <section id="locations" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Strategic Locations"
          title="Located Right Where You Need To Be"
          description="Never get stuck in long traffic commutes. Our properties are positioned within minutes of major university campuses and central business districts."
          theme="dark"
        />

        {/* Location Hub Tabs */}
        <BranchTabs
          locations={locations}
          selectedLocationId={selectedLocationId}
          onSelectLocation={onSelectLocation}
        />

        {/* Active Location Detail Container */}
        <div className="mt-10 bg-slate-800/80 rounded-3xl p-6 sm:p-8 border border-slate-700/80 grid lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">
                {activeLocation.tag}
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">{activeLocation.name}</h3>
              <p className="text-xs text-slate-400 mt-2 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-orange-500 shrink-0" />
                <span>{activeLocation.address}</span>
              </p>
            </div>

            <p className="text-sm text-slate-300 leading-relaxed">
              {activeLocation.description}
            </p>

            {/* Proximity Matrix */}
            <ProximityMatrix pointsOfInterest={activeLocation.pointsOfInterest} />

            <div className="pt-2">
              <button
                onClick={() => onOpenInquiry?.()}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Schedule Site Visit</span>
              </button>
            </div>
          </div>

          {/* Right Interactive Google Map Iframe Container */}
          <LocationMapEmbed
            mapUrl={activeLocation.googleMapEmbed}
            locationName={activeLocation.name}
          />

        </div>
      </div>
    </section>
  );
}
