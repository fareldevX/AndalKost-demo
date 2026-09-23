import React from 'react';
import { Sparkles, Calendar, ArrowRight, Eye, CheckCircle2 } from 'lucide-react';
import HeroShowcaseCard from './HeroShowcaseCard';
import QuickSearchBar from './QuickSearchBar';

/**
 * Hero showcase and value proposition section
 */
export default function HeroSection({
  selectedLocation,
  onLocationChange,
  selectedAudience,
  onAudienceChange,
  onOpenInquiry
}) {
  return (
    <section className="relative pt-8 pb-16 lg:pt-16 lg:pb-24 overflow-hidden bg-gradient-to-b from-orange-50/70 via-white to-slate-50">
      {/* Decorative background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-orange-300/30 to-amber-200/40 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Headlines & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-100/80 border border-orange-200 text-orange-800 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="flex h-2 w-2 rounded-full bg-orange-500 animate-ping" />
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span>98% Occupancy Rate across 5 Strategic Hubs</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 leading-[1.15]">
              Modern, Secure & <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500">
                Fully-Furnished
              </span>{' '}
              Living at AndalKost
            </h1>

            {/* Sub-headline */}
            <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Premium boarding house tailored for university students and young professionals. Walking distance to campus & CBD, 500Mbps Wi-Fi, 24/7 RFID security, and zero hassle.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <button
                onClick={() => onOpenInquiry()}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 via-orange-600 to-amber-600 text-white font-bold text-base hover:from-orange-600 hover:to-orange-700 shadow-xl shadow-orange-500/25 hover:shadow-orange-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-3"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a Room Now</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#rooms"
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold text-base hover:bg-slate-50 hover:border-slate-300 shadow-xs transition-all flex items-center justify-center gap-2"
              >
                <Eye className="w-5 h-5 text-slate-500" />
                <span>Explore Rooms & Prices</span>
              </a>
            </div>

            {/* Quick Feature Pill Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-slate-600 text-xs sm:text-sm font-semibold">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                <span>Zero Agent Fees</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                <span>Free Room Cleaning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                <span>Flexible Terms</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Card / Interactive Room Showcase */}
          <HeroShowcaseCard />
        </div>

        {/* Quick Search & Filter Bar */}
        <QuickSearchBar
          selectedLocation={selectedLocation}
          onLocationChange={onLocationChange}
          selectedAudience={selectedAudience}
          onAudienceChange={onAudienceChange}
        />
      </div>
    </section>
  );
}
