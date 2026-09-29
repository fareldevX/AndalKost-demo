import { TESTIMONIALS } from "../data/testimonials";

/**
 * Tenant testimonials and social proof section
 */
export default function TestimonialsSection({ testimonials = TESTIMONIALS }) {
  const featuredTestimonial = testimonials[0];

  return (
    <section className="bg-[#171717] px-6 py-32 text-[#F5F4EF] lg:px-12">
      <div className="reveal-text mx-auto flex max-w-5xl flex-col items-center text-center">
        <span className="mb-12 block text-[10px] uppercase tracking-widest text-[#77756F]">
          RESIDENT VOICES
        </span>

        <div className="relative">
          <span
            aria-hidden="true"
            className="absolute -left-8 -top-12 font-display text-8xl leading-none text-[#8A9678] opacity-50 lg:-left-16 lg:-top-24 lg:text-[10rem]"
          >
            &quot;
          </span>
          <blockquote className="relative z-10 font-display text-3xl uppercase leading-tight tracking-tight lg:text-5xl">
            {featuredTestimonial.quote}
          </blockquote>
        </div>

        <div className="mt-16 flex w-64 flex-col items-center border-t border-[#77756F]/30 pt-8">
          <span className="text-xs font-semibold uppercase tracking-widest">
            {featuredTestimonial.name}
          </span>
          <span className="mt-1 text-[10px] uppercase tracking-widest text-[#77756F]">
            {featuredTestimonial.role}
          </span>
        </div>
      </div>
    </section>
  );
}
