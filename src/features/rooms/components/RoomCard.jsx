import { ArrowRight } from "lucide-react";

/**
 * Individual room tier presentation card
 */
export default function RoomCard({
  room,
  index,
  billingCycle,
  onSelectForModal,
  onOpenInquiry,
}) {
  const activePrice =
    billingCycle === "monthly" ? room.priceMonthly : room.priceYearly;

  const isEven = index % 2 === 0;

  return (
    <article className="group grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-16">
      <div
        className={`relative h-[50vh] min-h-72 overflow-hidden bg-[#DCDAD3] lg:col-span-7 lg:h-[75vh] ${!isEven ? "lg:order-2" : ""}`}
      >
        <img
          alt={room.name}
          className="img-hover-scale img-parallax absolute inset-0 h-full w-full origin-center object-cover"
          loading="lazy"
          src={room.images[0]}
        />
        <span className="absolute left-6 top-6 bg-[#F5F4EF] px-3 py-1.5 text-[9px] font-semibold uppercase tracking-widest text-[#171717]">
          {room.badge}
        </span>
      </div>

      <div
        className={`reveal-text flex flex-col lg:col-span-5 ${!isEven ? "lg:order-1 lg:pr-12" : "lg:pl-12"}`}
      >
        <div className="mb-8 flex items-end justify-between border-b border-[#DCDAD3] pb-4">
          <span className="font-display text-4xl text-[#DCDAD3]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-[#77756F]">
            {room.size} · {room.targetAudience}
          </span>
        </div>

        <h3 className="mb-4 font-display text-3xl uppercase tracking-tight lg:text-5xl">
          {room.name}
        </h3>
        <p className="mb-8 text-sm leading-relaxed text-[#77756F]">
          {room.description}
        </p>

        <ul className="mb-12 space-y-4">
          {room.features.slice(0, 3).map((feature) => (
            <li
              className="flex items-start gap-4 border-t border-[#DCDAD3]/40 pt-4 text-xs font-medium uppercase tracking-wider"
              key={feature}
            >
              <span className="text-[#8A9678]">/</span>
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-6">
          <div>
            <span className="mb-1 block text-[10px] uppercase tracking-widest text-[#77756F]">
              PRICE /{billingCycle === "monthly" ? "MO" : "YR"}
            </span>
            <span className="font-display text-3xl tracking-tight">
              IDR {activePrice.toLocaleString("id-ID")}
            </span>
          </div>

          <div className="flex gap-4">
            <button
              className="flex-1 border border-[#171717] py-4 text-xs font-semibold uppercase tracking-widest transition-colors hover:bg-[#171717] hover:text-[#F5F4EF]"
              onClick={() => onSelectForModal(room)}
              type="button"
            >
              DETAILS
            </button>
            <button
              className="btn-hover-arrow flex flex-1 items-center justify-center gap-2 bg-[#171717] py-4 text-xs font-semibold uppercase tracking-widest text-[#F5F4EF] transition-colors hover:bg-[#8A9678]"
              onClick={() => onOpenInquiry(room.name)}
              type="button"
            >
              INQUIRE <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
