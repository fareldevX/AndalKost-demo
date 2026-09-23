import React from 'react';
import SectionHeader from '../../../components/ui/SectionHeader';
import RoomCard from './RoomCard';

/**
 * Rooms catalog and pricing showcase section
 */
export default function RoomsSection({
  rooms,
  billingCycle,
  onToggleBilling,
  selectedAudience,
  onSelectAudience,
  onSelectRoomForModal,
  onOpenInquiry
}) {
  return (
    <section id="rooms" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Transparent Pricing & Options"
          title="Choose Your Ideal Room Tier"
          description="Fully transparent rates with zero hidden maintenance fees. Select your preferred room layout below."
        >
          {/* Audience Filter Pills & Billing Cycle Switch */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* Category Filter */}
            <div className="bg-slate-100 p-1.5 rounded-xl flex items-center gap-1 border border-slate-200">
              {['All', 'Student', 'Professional'].map((category) => (
                <button
                  key={category}
                  onClick={() => onSelectAudience(category)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                    selectedAudience === category
                      ? 'bg-white text-orange-600 shadow-xs'
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {category === 'All' ? 'All Types' : `For ${category}s`}
                </button>
              ))}
            </div>

            {/* Billing Toggle (Monthly / Yearly) */}
            <div className="flex items-center gap-3 bg-orange-50 px-4 py-2 rounded-xl border border-orange-200">
              <span
                className={`text-xs font-bold ${
                  billingCycle === 'monthly' ? 'text-slate-900' : 'text-slate-500'
                }`}
              >
                Monthly
              </span>
              <button
                onClick={onToggleBilling}
                className="relative w-12 h-6 rounded-full bg-orange-500 transition-colors p-1"
                aria-label="Toggle billing cycle"
              >
                <div
                  className={`w-4 h-4 rounded-full bg-white transition-transform ${
                    billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
              <div className="flex items-center gap-1.5">
                <span
                  className={`text-xs font-bold ${
                    billingCycle === 'yearly' ? 'text-slate-900' : 'text-slate-500'
                  }`}
                >
                  Yearly Payment
                </span>
                <span className="px-2 py-0.5 rounded-md bg-emerald-500 text-white text-[10px] font-extrabold uppercase">
                  Save ~10%
                </span>
              </div>
            </div>
          </div>
        </SectionHeader>

        {/* Room Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              billingCycle={billingCycle}
              onSelectForModal={onSelectRoomForModal}
              onOpenInquiry={onOpenInquiry}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
