import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { LOCATIONS } from "../../../../features/locations/data/locations";

/**
 * Quick search and filter bar displayed in the hero section
 */
export default function QuickSearchBar({
  selectedLocation,
  onLocationChange,
  selectedAudience,
  onAudienceChange,
}) {
  const [timeline, setTimeline] = useState("Immediate");

  return (
    <section className="border-y border-[#DCDAD3] bg-[#FAFAF8] px-6 py-12 lg:px-12">
      <div className="mb-8 flex flex-col">
        <span className="mb-2 text-[10px] uppercase tracking-widest text-[#77756F]">
          QUICK SEARCH
        </span>
        <h2 className="font-display text-2xl uppercase tracking-tight lg:text-3xl">
          WHERE DO YOU WANT TO STAY?
        </h2>
      </div>

      <div className="grid grid-cols-1 items-end gap-x-12 gap-y-8 md:grid-cols-4">
        <label
          className="flex min-w-0 flex-col border-b border-[#DCDAD3] pb-2"
          htmlFor="search-location"
        >
          <span className="mb-2 text-[10px] uppercase tracking-widest text-[#77756F]">
            LOCATION
          </span>
          <select
            className="w-full cursor-pointer appearance-none bg-transparent text-sm font-medium uppercase focus:outline-none lg:text-base"
            id="search-location"
            onChange={(event) => onLocationChange(event.target.value)}
            value={selectedLocation}
          >
            {LOCATIONS.map((location) => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </select>
        </label>

        <label
          className="flex min-w-0 flex-col border-b border-[#DCDAD3] pb-2"
          htmlFor="search-category"
        >
          <span className="mb-2 text-[10px] uppercase tracking-widest text-[#77756F]">
            CATEGORY
          </span>
          <select
            className="w-full cursor-pointer appearance-none bg-transparent text-sm font-medium uppercase focus:outline-none lg:text-base"
            id="search-category"
            onChange={(event) => onAudienceChange(event.target.value)}
            value={selectedAudience}
          >
            <option value="All">All Categories</option>
            <option value="Student">Student</option>
            <option value="Professional">Professional</option>
          </select>
        </label>

        <label
          className="flex min-w-0 flex-col border-b border-[#DCDAD3] pb-2"
          htmlFor="search-timeline"
        >
          <span className="mb-2 text-[10px] uppercase tracking-widest text-[#77756F]">
            TIMELINE
          </span>
          <select
            className="w-full cursor-pointer appearance-none bg-transparent text-sm font-medium uppercase focus:outline-none lg:text-base"
            id="search-timeline"
            onChange={(event) => setTimeline(event.target.value)}
            value={timeline}
          >
            <option value="Immediate">Immediate</option>
            <option value="Next Month">Next Month</option>
            <option value="Next Semester">Next Semester</option>
          </select>
        </label>

        <button
          className="btn-hover-arrow flex w-full items-center justify-between bg-[#171717] px-6 py-4 text-xs font-semibold uppercase tracking-widest text-[#F5F4EF] transition-colors hover:bg-[#8A9678]"
          onClick={() =>
            document
              .getElementById("rooms")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          type="button"
        >
          <span>SEARCH</span>
          <ArrowRight aria-hidden="true" className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
