import { CONTACT_INFO } from "../../constants/contact";

/**
 * Multi-column footer with brand overview, branch shortcuts, and legal links
 */
export default function Footer() {
  return (
    <footer className="border-t border-[#77756F]/20 bg-[#171717] px-6 py-16 text-[#F5F4EF] lg:px-12">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 border-b border-[#77756F]/30 pb-16 md:grid-cols-4 lg:gap-8">
        <div className="md:col-span-2">
          <span className="mb-4 block font-display text-3xl font-bold uppercase tracking-tight">
            ANDALKOST
          </span>
          <p className="max-w-xs text-[11px] uppercase leading-relaxed tracking-widest text-[#77756F]">
            Premium residential spaces. Designed for modern living, focus, and
            comfort.
          </p>
        </div>

        <div>
          <h2 className="mb-6 text-[10px] uppercase tracking-widest text-[#77756F]">
            NAVIGATION
          </h2>
          <ul className="space-y-3 text-xs font-medium uppercase tracking-wider">
            <li>
              <a
                className="transition-colors hover:text-[#8A9678]"
                href="#about"
              >
                ABOUT
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-[#8A9678]"
                href="#rooms"
              >
                SPACES
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-[#8A9678]"
                href="#facilities"
              >
                FEATURES
              </a>
            </li>
            <li>
              <a
                className="transition-colors hover:text-[#8A9678]"
                href="#locations"
              >
                LOCATIONS
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="mb-6 text-[10px] uppercase tracking-widest text-[#77756F]">
            CONTACT
          </h2>
          <ul className="space-y-3 text-xs font-medium uppercase tracking-wider text-[#DCDAD3]">
            <li>{CONTACT_INFO.formattedPhone}</li>
            <li>INFO@ANDALKOST.COM</li>
            <li className="mt-6">
              <a
                className="inline-block border-b border-[#DCDAD3] pb-1 hover:text-[#8A9678]"
                href="#"
              >
                INSTAGRAM
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-[1440px] items-center justify-between pt-8 text-[10px] uppercase tracking-widest text-[#77756F]">
        <span>© {new Date().getFullYear()} ANDALKOST</span>
        <span>A PLACE TO CALL HOME.</span>
      </div>
    </footer>
  );
}
