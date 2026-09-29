import { ArrowRight, ArrowUpRight } from "lucide-react";

const NAV_ITEMS = [
  ["ABOUT", "#about"],
  ["SPACES", "#rooms"],
  ["FEATURES", "#facilities"],
  ["LOCATIONS", "#locations"],
];

export default function MobileMenu({ isOpen, onClose, onOpenInquiry }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 top-20 z-50 flex flex-col overflow-x-hidden bg-[#F5F4EF] px-6 py-12 md:hidden">
      <nav
        aria-label="Mobile navigation"
        className="flex flex-col gap-8 font-display text-4xl uppercase text-[#171717]"
      >
        {NAV_ITEMS.map(([label, href]) => (
          <a
            className="flex items-center justify-between border-b border-[#DCDAD3] pb-4"
            href={href}
            key={href}
            onClick={onClose}
          >
            {label}
            <ArrowUpRight
              aria-hidden="true"
              className="h-6 w-6 text-[#77756F]"
            />
          </a>
        ))}
      </nav>

      <div className="mt-auto pt-8">
        <button
          className="btn-hover-arrow flex w-full items-center justify-between bg-[#171717] px-6 py-5 font-display text-lg uppercase text-[#F5F4EF]"
          onClick={() => {
            onClose();
            onOpenInquiry();
          }}
          type="button"
        >
          <span>INQUIRE NOW</span>
          <ArrowRight aria-hidden="true" className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
