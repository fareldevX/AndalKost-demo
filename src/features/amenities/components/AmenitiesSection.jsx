import FacilityItem from "./FacilityItem";
import { AMENITIES } from "../data/amenities";

/**
 * Amenities & facilities feature section
 */
export default function AmenitiesSection({ amenities = AMENITIES }) {
  return (
    <section id="facilities" className="relative px-6 py-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="reveal-text mb-16">
          <span className="mb-4 block text-[10px] uppercase tracking-widest text-[#77756F]">
            02 / FEATURES
          </span>
          <h2 className="max-w-2xl font-display text-4xl uppercase tracking-tight lg:text-6xl">
            DESIGNED FOR LIVING.
          </h2>
        </div>

        <div className="flex flex-col border-b border-[#171717]">
          {amenities.map((item) => (
            <div className="reveal-text" key={item.number}>
              <FacilityItem item={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
