import { ArrowRight } from "lucide-react";
import { LOCATIONS } from "../data/locations";

/**
 * Strategic locations and map explorer section
 */
export default function LocationsSection({
  locations = LOCATIONS,
  selectedLocationId,
  onSelectLocation,
}) {
  const activeLocation =
    locations.find((location) => location.id === selectedLocationId) ||
    locations[0];

  return (
    <section
      id="locations"
      className="border-y border-[#DCDAD3] bg-[#FAFAF8] px-6 py-24 lg:px-12"
    >
      <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
        <div className="reveal-text flex flex-col lg:sticky lg:top-32 lg:col-span-5">
          <span className="mb-4 block text-[10px] uppercase tracking-widest text-[#77756F]">
            03 / LOCATIONS
          </span>
          <h2 className="mb-12 font-display text-4xl uppercase tracking-tight lg:text-6xl">
            CLOSE TO WHAT MATTERS.
          </h2>

          <div className="flex w-full flex-col border-t border-[#DCDAD3]">
            {locations.map((location) => (
              <button
                aria-pressed={selectedLocationId === location.id}
                className={`group flex items-center justify-between border-b border-[#DCDAD3] py-6 text-left ${selectedLocationId === location.id ? "text-[#171717]" : "text-[#77756F]"}`}
                key={location.id}
                onClick={() => onSelectLocation(location.id)}
                type="button"
              >
                <span className="font-display text-2xl uppercase tracking-tight transition-colors group-hover:text-[#171717] lg:text-3xl">
                  {location.name}
                </span>
                <ArrowRight
                  aria-hidden="true"
                  className={`h-6 w-6 transition-transform ${selectedLocationId === location.id ? "translate-x-0 text-[#171717]" : "-translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 group-hover:text-[#171717]"}`}
                />
              </button>
            ))}
          </div>

          <div className="mt-12">
            <span className="mb-2 block text-[10px] uppercase tracking-widest text-[#77756F]">
              {activeLocation.tag}
            </span>
            <p className="mb-6 text-sm leading-relaxed">
              {activeLocation.description}
            </p>
            <ul className="space-y-3 border-t border-[#DCDAD3] pt-6">
              {activeLocation.pointsOfInterest.map((point) => (
                <li
                  className="flex items-center justify-between gap-4 text-xs font-medium uppercase tracking-wider"
                  key={point.name}
                >
                  <span>{point.name}</span>
                  <span className="shrink-0 text-[#8A9678]">
                    {point.distance}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="reveal-text h-[60vh] w-full border border-[#DCDAD3] bg-white p-2 lg:col-span-7 lg:h-[80vh]">
          <iframe
            className="h-full w-full border-0 grayscale transition-all duration-700 hover:grayscale-0"
            loading="lazy"
            src={activeLocation.googleMapEmbed}
            title={`Google Maps: ${activeLocation.name}`}
          />
        </div>
      </div>
    </section>
  );
}
