import React from 'react';
import { Eye, Wifi, Building2, Bed, Bath, Wind, Check, Calendar } from 'lucide-react';
import { formatCurrencyIDR } from '../../../utils/formatters';

/**
 * Individual room tier presentation card
 */
export default function RoomCard({
  room,
  billingCycle,
  onSelectForModal,
  onOpenInquiry
}) {
  const activePrice = billingCycle === 'monthly' ? room.priceMonthly : room.priceYearly;

  return (
    <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-200/80 hover:border-orange-400 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col">
      {/* Card Header Image Preview */}
      <div className="relative h-60 w-full bg-slate-200 group overflow-hidden">
        <img
          src={room.images[0]}
          alt={room.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-bold uppercase shadow-md">
            {room.badge}
          </span>
        </div>

        <div className="absolute bottom-3 right-3 bg-slate-900/80 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-lg flex items-center gap-1 font-medium">
          <Eye className="w-3.5 h-3.5 text-orange-400" />
          <span>{room.images.length} Photos</span>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-6">
        <div className="space-y-3">
          <div>
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider">
                {room.targetAudience} Suite
              </span>
              <span className="text-xs text-slate-500 font-semibold flex items-center gap-1">
                <Wifi className="w-3.5 h-3.5 text-emerald-500" />
                {room.wifiSpeed}
              </span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mt-1">{room.name}</h3>
            <p className="text-xs text-slate-500 mt-0.5">{room.tagline}</p>
          </div>

          {/* Room Specs Pills */}
          <div className="grid grid-cols-2 gap-2 text-xs font-medium text-slate-700 bg-white p-3 rounded-xl border border-slate-200/60">
            <div className="flex items-center gap-1.5">
              <Building2 className="w-4 h-4 text-orange-500" />
              <span>Size: {room.size}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bed className="w-4 h-4 text-orange-500" />
              <span>{room.bed}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Bath className="w-4 h-4 text-orange-500" />
              <span>En-suite Hot Bath</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Wind className="w-4 h-4 text-orange-500" />
              <span>AC 1 HP Inverter</span>
            </div>
          </div>

          {/* Feature Bullet List */}
          <ul className="space-y-2 pt-2">
            {room.features.slice(0, 4).map((feat, idx) => (
              <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 font-normal">
                <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing & CTA */}
        <div className="pt-4 border-t border-slate-200/80 space-y-4">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="text-2xl font-black text-slate-900">
                {formatCurrencyIDR(activePrice)}
              </span>
              <span className="text-xs text-slate-500 font-medium"> / month</span>
            </div>
            {billingCycle === 'yearly' && (
              <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                Billed annually
              </span>
            )}
          </div>

          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={() => onSelectForModal(room)}
              className="w-full py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-100 transition-colors flex items-center justify-center gap-1"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Spec Detail</span>
            </button>
            
            <button
              onClick={() => onOpenInquiry(room.name)}
              className="w-full py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-1"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book Room</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
