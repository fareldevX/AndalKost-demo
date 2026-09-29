import RoomCard from "./RoomCard";

/**
 * Rooms catalog and pricing showcase section
 */
export default function RoomsSection({
  rooms,
  billingCycle,
  onToggleBilling,
  onSelectRoomForModal,
  onOpenInquiry,
}) {
  return (
    <section
      id="rooms"
      className="border-t border-[#DCDAD3] bg-[#FAFAF8] px-6 py-24 lg:px-12"
    >
      <div>
        <div className="reveal-text mb-24 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <span className="mb-4 block text-[10px] uppercase tracking-widest text-[#77756F]">
              01 / SPACES
            </span>
            <h2 className="font-display text-4xl uppercase tracking-tight lg:text-6xl">
              CURATED LIVING
            </h2>
          </div>

          <div className="flex flex-col items-start gap-4 md:items-end">
            <div className="flex items-center gap-4 text-xs font-semibold uppercase tracking-widest">
              <span
                className={
                  billingCycle === "monthly"
                    ? "text-[#171717]"
                    : "text-[#77756F]"
                }
              >
                MONTHLY
              </span>
              <button
                aria-label="Toggle billing cycle"
                aria-pressed={billingCycle === "yearly"}
                className="relative h-6 w-12 border border-[#171717] p-1"
                onClick={onToggleBilling}
                type="button"
              >
                <span
                  className={`block h-4 w-4 bg-[#171717] transition-transform duration-300 ${billingCycle === "yearly" ? "translate-x-6" : "translate-x-0"}`}
                />
              </button>
              <span
                className={
                  billingCycle === "yearly"
                    ? "text-[#171717]"
                    : "text-[#77756F]"
                }
              >
                YEARLY (-10%)
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-32 lg:gap-48">
          {rooms.map((room, index) => (
            <RoomCard
              key={room.id}
              room={room}
              index={index}
              billingCycle={billingCycle}
              onSelectForModal={onSelectRoomForModal}
              onOpenInquiry={onOpenInquiry}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
