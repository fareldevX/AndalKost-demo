import { MessageSquare } from "lucide-react";
import { LOCATIONS } from "../../locations/data/locations";
import { ROOM_TIERS } from "../../rooms/data/rooms";

export default function InquiryForm({ formData, onChange, onSubmit }) {
  return (
    <form className="space-y-6 p-8 pt-6 lg:p-12 lg:pt-6" onSubmit={onSubmit}>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <label
          className="block text-[10px] uppercase tracking-widest text-[#77756F]"
          htmlFor="inquiry-name"
        >
          FULL NAME
          <input
            className="mt-2 w-full border-b border-[#171717] bg-transparent py-2 text-sm focus:border-[#8A9678] focus:outline-none"
            id="inquiry-name"
            onChange={(event) => onChange("name", event.target.value)}
            required
            type="text"
            value={formData.name}
          />
        </label>
        <label
          className="block text-[10px] uppercase tracking-widest text-[#77756F]"
          htmlFor="inquiry-phone"
        >
          WHATSAPP NUMBER
          <input
            className="mt-2 w-full border-b border-[#171717] bg-transparent py-2 text-sm focus:border-[#8A9678] focus:outline-none"
            id="inquiry-phone"
            onChange={(event) => onChange("phone", event.target.value)}
            required
            type="tel"
            value={formData.phone}
          />
        </label>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <label
          className="block text-[10px] uppercase tracking-widest text-[#77756F]"
          htmlFor="inquiry-location"
        >
          LOCATION
          <select
            className="mt-2 w-full appearance-none border-b border-[#171717] bg-transparent py-2 text-sm uppercase focus:border-[#8A9678] focus:outline-none"
            id="inquiry-location"
            onChange={(event) => onChange("branch", event.target.value)}
            value={formData.branch}
          >
            {LOCATIONS.map((location) => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </select>
        </label>
        <label
          className="block text-[10px] uppercase tracking-widest text-[#77756F]"
          htmlFor="inquiry-room"
        >
          SPACE TYPE
          <select
            className="mt-2 w-full appearance-none border-b border-[#171717] bg-transparent py-2 text-sm uppercase focus:border-[#8A9678] focus:outline-none"
            id="inquiry-room"
            onChange={(event) => onChange("roomType", event.target.value)}
            value={formData.roomType}
          >
            {ROOM_TIERS.map((room) => (
              <option key={room.id} value={room.name}>
                {room.name}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label
        className="block text-[10px] uppercase tracking-widest text-[#77756F]"
        htmlFor="inquiry-move-in"
      >
        MOVE IN DATE
        <input
          className="mt-2 w-full border-b border-[#171717] bg-transparent py-2 text-sm uppercase focus:border-[#8A9678] focus:outline-none"
          id="inquiry-move-in"
          onChange={(event) => onChange("moveInDate", event.target.value)}
          type="date"
          value={formData.moveInDate}
        />
      </label>

      <button
        className="btn-hover-arrow mt-4 flex w-full items-center justify-between bg-[#171717] px-6 py-5 text-xs font-semibold uppercase tracking-widest text-[#F5F4EF] transition-colors hover:bg-[#8A9678]"
        type="submit"
      >
        <span>SEND INQUIRY</span>
        <MessageSquare aria-hidden="true" className="h-4 w-4" />
      </button>
    </form>
  );
}
