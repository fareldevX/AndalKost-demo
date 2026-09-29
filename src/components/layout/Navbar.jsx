import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useBodyScrollLock } from "../../hooks/useBodyScrollLock";
import MobileMenu from "./MobileMenu";

const NAV_ITEMS = [
  ["ABOUT", "#about"],
  ["SPACES", "#rooms"],
  ["FEATURES", "#facilities"],
  ["LOCATIONS", "#locations"],
];

export default function Navbar({ onOpenInquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  useBodyScrollLock(mobileMenuOpen);

  return (
    <>
      <header className="fixed top-0 z-40 w-full border-b border-[#DCDAD3]/50 bg-[#F5F4EF]/90 backdrop-blur-md transition-all">
        <div className="flex h-20 w-full items-center justify-between px-6 lg:px-12">
          <a aria-label="AndalKost home" className="flex flex-col" href="#top">
            <span className="font-display text-xl font-bold uppercase leading-none tracking-tight">
              ANDALKOST
            </span>
            <span className="mt-0.5 text-[9px] uppercase tracking-widest text-[#77756F]">
              Modern Living
            </span>
          </a>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-10 text-xs font-medium uppercase tracking-widest text-[#77756F] md:flex"
          >
            {NAV_ITEMS.map(([label, href]) => (
              <a
                className="transition-colors hover:text-[#171717]"
                href={href}
                key={href}
              >
                {label}
              </a>
            ))}
          </nav>

          <button
            className="hidden text-xs font-medium uppercase tracking-widest transition-colors hover:text-[#8A9678] md:block"
            onClick={() => onOpenInquiry()}
            type="button"
          >
            INQUIRE NOW
          </button>

          <button
            aria-expanded={mobileMenuOpen}
            aria-label={
              mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"
            }
            className="p-2 text-[#171717] md:hidden"
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            type="button"
          >
            {mobileMenuOpen ? (
              <X aria-hidden="true" className="h-6 w-6" />
            ) : (
              <Menu aria-hidden="true" className="h-6 w-6" />
            )}
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onOpenInquiry={onOpenInquiry}
      />
    </>
  );
}
