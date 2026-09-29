import { ArrowRight } from "lucide-react";
import QuickSearchBar from "./QuickSearchBar";

/**
 * Hero showcase and value proposition section
 */
export default function HeroSection({
  selectedLocation,
  onLocationChange,
  selectedAudience,
  onAudienceChange,
}) {
  const scrollToRooms = () => {
    document.getElementById("rooms")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <section
        id="top"
        className="relative flex min-h-[90vh] flex-col justify-end px-6 pb-20 pt-32 lg:px-12 lg:pb-32 lg:pt-40"
      >
        <div className="relative z-10 grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="flex flex-col justify-end lg:col-span-7">
            <h1 className="m-0 p-0 font-display text-[14vw] uppercase leading-[0.85] tracking-tighter text-[#171717] lg:text-[9vw]">
              <span className="block overflow-hidden">
                <span className="hero-line-inner block">FIND</span>
              </span>
              <span className="block overflow-hidden">
                <span className="hero-line-inner block">YOUR</span>
              </span>
              <span className="block overflow-hidden">
                <span className="hero-line-inner block text-[#8A9678]">
                  SPACE.
                </span>
              </span>
            </h1>

            <div className="hero-meta mt-12 flex flex-col gap-8 sm:flex-row sm:items-end lg:mt-16">
              <p className="max-w-xs text-sm leading-relaxed text-[#77756F] lg:text-base">
                Premium living spaces designed for focus, comfort, and
                contemporary lifestyles in the heart of the city.
              </p>
              <button
                className="btn-hover-arrow group flex w-max items-center gap-3 border-b border-[#171717] pb-1 text-xs font-semibold uppercase tracking-widest transition-all hover:border-[#8A9678] hover:text-[#8A9678]"
                onClick={scrollToRooms}
                type="button"
              >
                EXPLORE SPACES{" "}
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="relative mt-8 h-[50vh] w-full overflow-hidden bg-[#DCDAD3] lg:col-span-5 lg:mt-0 lg:h-[70vh]">
            <img
              alt="AndalKost interior"
              className="hero-img absolute h-full w-full origin-bottom object-cover"
              fetchPriority="high"
              src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1200"
            />
          </div>
        </div>
      </section>

      <QuickSearchBar
        selectedLocation={selectedLocation}
        onLocationChange={onLocationChange}
        selectedAudience={selectedAudience}
        onAudienceChange={onAudienceChange}
      />
    </>
  );
}
