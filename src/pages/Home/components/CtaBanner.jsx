import React from 'react';
import { Calendar, MessageSquare } from 'lucide-react';
import { CONTACT_INFO } from '../../../constants/contact';

/**
 * Bottom call-to-action conversion banner
 */
export default function CtaBanner({ onOpenInquiry }) {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <h2 className="text-3xl sm:text-5xl font-black tracking-tight max-w-3xl mx-auto leading-tight">
          Ready to Secure Your Premium Room at AndalKost?
        </h2>
        <p className="text-orange-100 text-base sm:text-lg max-w-2xl mx-auto">
          Rooms in prime campus and business locations fill up fast. Inquire today and lock in your price for next semester or work transition!
        </p>
        <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() => onOpenInquiry()}
            className="px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold text-base hover:bg-slate-800 shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <Calendar className="w-5 h-5 text-orange-400" />
            <span>Book Room Online</span>
          </button>
          <a
            href={CONTACT_INFO.ctaWaUrl}
            target="_blank"
            rel="noreferrer"
            className="px-8 py-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-xl transition-all flex items-center justify-center gap-2"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Chat via WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
