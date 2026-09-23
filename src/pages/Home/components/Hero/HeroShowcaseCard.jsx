import React from 'react';
import { Star, Wifi, ShieldCheck, GraduationCap } from 'lucide-react';

/**
 * Interactive room showcase card displayed in the hero section
 */
export default function HeroShowcaseCard() {
  return (
    <div className="lg:col-span-5 relative">
      <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl bg-white p-3 shadow-2xl shadow-orange-950/10 border border-slate-200/80 group">
        {/* Hero Room Image */}
        <div className="relative h-[340px] sm:h-[400px] w-full rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=1000"
            alt="AndalKost Deluxe Room Interior"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

          {/* Top Badges */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-1.5 border border-white/20">
              <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
              <span>4.95 Top Rated</span>
            </span>
          </div>

          {/* Live Wifi Tag */}
          <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-emerald-500/90 backdrop-blur-md text-white text-xs font-bold flex items-center gap-1.5 shadow-md">
            <Wifi className="w-3.5 h-3.5" />
            <span>500 Mbps Active</span>
          </div>

          {/* Bottom Image Overlay Details */}
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <p className="text-xs font-semibold text-orange-300 uppercase tracking-wider">
              Featured Accommodation
            </p>
            <h3 className="text-xl font-bold">Deluxe Studio Executive</h3>
            <p className="text-xs text-slate-200 mt-1 flex items-center gap-3">
              <span>• 22 m² Space</span>
              <span>• Private Bathroom</span>
              <span>• Smart Lock</span>
            </p>
          </div>
        </div>

        {/* Quick Floating Stat Cards */}
        <div className="absolute -bottom-6 -left-6 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3 animate-bounce-slow">
          <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900">24/7 Security</p>
            <p className="text-[11px] text-slate-500">CCTV & RFID Guards</p>
          </div>
        </div>

        <div className="absolute -top-6 -right-6 bg-white p-3.5 rounded-2xl shadow-xl border border-slate-100 hidden sm:flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xs font-bold text-slate-900">3 Mins To Campus</p>
            <p className="text-[11px] text-slate-500">Walkable Strategic Spot</p>
          </div>
        </div>
      </div>
    </div>
  );
}
