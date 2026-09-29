import { ArrowRight, Check } from "lucide-react";
import Modal from "../../../components/ui/Modal";

export default function RoomDetailModal({ room, onClose, onInquire }) {
  if (!room) return null;

  return (
    <Modal
      ariaLabel={room.name}
      className="grid md:grid-cols-2"
      isOpen={Boolean(room)}
      maxWidth="max-w-4xl"
      onClose={onClose}
    >
      <div className="relative h-[40vh] min-h-64 border-b border-[#171717] md:h-full md:min-h-[620px] md:border-b-0 md:border-r">
        <img
          alt={room.name}
          className="absolute inset-0 h-full w-full object-cover"
          src={room.images[0]}
        />
      </div>

      <div className="flex flex-col p-8 lg:p-12">
        <span className="mb-2 block text-[10px] font-semibold uppercase tracking-widest text-[#8A9678]">
          {room.badge}
        </span>
        <h2 className="mb-4 font-display text-4xl uppercase tracking-tight">
          {room.name}
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-[#77756F]">
          {room.description}
        </p>

        <div className="mb-8 border-y border-[#DCDAD3] py-6">
          <h3 className="mb-4 block text-[10px] font-semibold uppercase tracking-widest">
            INCLUDED AMENITIES
          </h3>
          <ul className="grid grid-cols-1 gap-3">
            {room.features.map((feature) => (
              <li
                className="flex items-start gap-3 text-xs font-medium uppercase tracking-wider text-[#77756F]"
                key={feature}
              >
                <Check
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-[#8A9678]"
                />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-auto">
          <span className="mb-1 block text-[10px] uppercase tracking-widest text-[#77756F]">
            MONTHLY RATE
          </span>
          <span className="mb-6 block font-display text-3xl">
            IDR {room.priceMonthly.toLocaleString("id-ID")}
          </span>
          <button
            className="btn-hover-arrow flex w-full items-center justify-center gap-2 bg-[#171717] py-4 text-xs font-semibold uppercase tracking-widest text-[#F5F4EF] transition-colors hover:bg-[#8A9678]"
            onClick={() => {
              const roomName = room.name;
              onClose();
              onInquire(roomName);
            }}
            type="button"
          >
            INQUIRE THIS SPACE{" "}
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </button>
        </div>
      </div>
    </Modal>
  );
}
