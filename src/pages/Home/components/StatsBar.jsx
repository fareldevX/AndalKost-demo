import React from 'react';

/**
 * Dark metrics and trust counter bar
 */
export default function StatsBar() {
  return (
    <section className="bg-slate-900 text-white py-10 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-orange-500">500+</p>
            <p className="text-xs sm:text-sm font-medium text-slate-400">Satisfied Residents</p>
          </div>

          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-orange-500">99.9%</p>
            <p className="text-xs sm:text-sm font-medium text-slate-400">Wi-Fi Uptime Reliability</p>
          </div>

          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-orange-500">3 Mins</p>
            <p className="text-xs sm:text-sm font-medium text-slate-400">Average Walk to Campus/LRT</p>
          </div>

          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-orange-500">4.9 / 5.0</p>
            <p className="text-xs sm:text-sm font-medium text-slate-400">Tenant Satisfaction Rating</p>
          </div>
        </div>
      </div>
    </section>
  );
}
