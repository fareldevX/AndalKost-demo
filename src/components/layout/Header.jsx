import React, { useState } from 'react';
import { Building2, MessageSquare, Calendar, Menu, X } from 'lucide-react';
import { CONTACT_INFO } from '../../constants/contact';

/**
 * Sticky header with brand logo, desktop navigation, and mobile drawer
 */
export default function Header({ onOpenInquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-orange-600 via-orange-500 to-amber-500 flex items-center justify-center text-white shadow-lg shadow-orange-500/30 group-hover:scale-105 transition-transform duration-200">
            <Building2 className="w-6 h-6" />
          </div>
          <div>
            <span className="text-2xl font-black tracking-tight text-slate-900 group-hover:text-orange-600 transition-colors">
              Andal<span className="text-orange-500">Kost</span>
            </span>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 -mt-1">
              Modern Student & Pro Living
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#rooms" className="hover:text-orange-600 transition-colors">Room Types</a>
          <a href="#amenities" className="hover:text-orange-600 transition-colors">Amenities</a>
          <a href="#locations" className="hover:text-orange-600 transition-colors">Locations</a>
          <a href="#reviews" className="hover:text-orange-600 transition-colors">Testimonials</a>
          <a href="#faq" className="hover:text-orange-600 transition-colors">FAQ</a>
        </nav>

        {/* Action CTAs */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={CONTACT_INFO.headerWaUrl}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-semibold text-sm hover:border-orange-500 hover:text-orange-600 hover:bg-orange-50/50 transition-all flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4 text-emerald-500" />
            <span>WhatsApp Admin</span>
          </a>
          <button
            onClick={() => onOpenInquiry()}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold text-sm hover:from-orange-600 hover:to-orange-700 shadow-md shadow-orange-500/20 hover:shadow-lg hover:shadow-orange-500/30 active:scale-95 transition-all flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a Room</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-2 pb-6 space-y-3 animate-in slide-in-from-top-2">
          <a
            href="#rooms"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 font-medium hover:text-orange-600"
          >
            Room Types & Pricing
          </a>
          <a
            href="#amenities"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 font-medium hover:text-orange-600"
          >
            Amenities
          </a>
          <a
            href="#locations"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 font-medium hover:text-orange-600"
          >
            Locations & Map
          </a>
          <a
            href="#reviews"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 font-medium hover:text-orange-600"
          >
            Tenant Reviews
          </a>
          <a
            href="#faq"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-2 text-slate-700 font-medium hover:text-orange-600"
          >
            FAQ
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3 rounded-xl bg-orange-500 text-white font-bold text-center shadow-md shadow-orange-500/30 flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Book / Check Availability</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
