import { ArrowRight } from "lucide-react";

/**
 * Bottom call-to-action conversion banner
 */
export default function CtaBanner({ onOpenInquiry }) {
  return (
    <section className="flex flex-col items-center bg-[#F5F4EF] px-6 pb-16 pt-32 text-center lg:px-12">
      <h2 className="reveal-text font-display text-[12vw] uppercase leading-[0.85] tracking-tighter text-[#171717] lg:text-[10vw]">
        READY
        <br />
        TO FIND
        <br />
        YOUR SPACE?
      </h2>

      <div className="reveal-text mt-16">
        <button
          className="btn-hover-arrow flex items-center justify-center gap-4 bg-[#171717] px-12 py-6 font-display text-2xl uppercase tracking-wider text-[#F5F4EF] transition-colors hover:bg-[#8A9678] lg:text-3xl"
          onClick={() => onOpenInquiry()}
          type="button"
        >
          <span>INQUIRE NOW</span>
          <ArrowRight aria-hidden="true" className="h-6 w-6" />
        </button>
      </div>
    </section>
  );
}
