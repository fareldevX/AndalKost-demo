import React from 'react';
import { MessageSquare, Calendar } from 'lucide-react';
import { CONTACT_INFO } from '../../constants/contact';

/**
 * Fixed bottom conversion bar for mobile devices
 */
export default function MobileBottomBar({ onOpenInquiry }) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/95 backdrop-blur-md border-t border-slate-200 p-3 flex items-center justify-between gap-3 shadow-2xl">
      <div className="space-y-0.5">
        <p className="text-[10px] uppercase font-extrabold text-orange-600">AndalKost Ready Rooms</p>
        <p className="text-xs font-bold text-slate-900">From Rp 1.65M/mo</p>
      </div>
      <div className="flex items-center gap-2">
        <a
          href={CONTACT_INFO.bottomWaUrl}
          target="_blank"
          rel="noreferrer"
          className="px-3.5 py-2.5 rounded-xl bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm"
        >
          <MessageSquare className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>
        <button
          onClick={() => onOpenInquiry()}
          className="px-4 py-2.5 rounded-xl bg-orange-500 text-white font-bold text-xs shadow-md shadow-orange-500/20 flex items-center gap-1.5"
        >
          <Calendar className="w-4 h-4" />
          <span>Book Now</span>
        </button>
      </div>
    </div>
  );
}
