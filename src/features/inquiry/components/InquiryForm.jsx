import React from 'react';
import { MessageSquare } from 'lucide-react';
import { LOCATIONS } from '../../locations/data/locations';
import { ROOM_TIERS } from '../../rooms/data/rooms';

/**
 * Lead capture inquiry form
 */
export default function InquiryForm({ formData, onChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label className="text-xs font-bold text-slate-700 block mb-1">Your Full Name</label>
        <input
          type="text"
          required
          placeholder="e.g. Sarah Amalia"
          value={formData.name}
          onChange={(e) => onChange('name', e.target.value)}
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-bold text-slate-700 block mb-1">Phone / WhatsApp</label>
          <input
            type="tel"
            required
            placeholder="08123456789"
            value={formData.phone}
            onChange={(e) => onChange('phone', e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
        <div>
          <label className="text-xs font-bold text-slate-700 block mb-1">Status</label>
          <select
            value={formData.tenantType}
            onChange={(e) => onChange('tenantType', e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
          >
            <option value="Student">University Student</option>
            <option value="Professional">Young Professional</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-bold text-slate-700 block mb-1">Branch Location</label>
          <select
            value={formData.branch}
            onChange={(e) => onChange('branch', e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
          >
            {LOCATIONS.map((loc) => (
              <option key={loc.id} value={loc.id}>
                {loc.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-xs font-bold text-slate-700 block mb-1">Room Tier</label>
          <select
            value={formData.roomType}
            onChange={(e) => onChange('roomType', e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
          >
            {ROOM_TIERS.map((tier) => (
              <option key={tier.id} value={tier.name}>
                {tier.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="text-xs font-bold text-slate-700 block mb-1">Planned Move-In Date</label>
        <input
          type="date"
          value={formData.moveInDate}
          onChange={(e) => onChange('moveInDate', e.target.value)}
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <div>
        <label className="text-xs font-bold text-slate-700 block mb-1">Notes / Questions (Optional)</label>
        <textarea
          rows={2}
          placeholder="e.g. Need motorcycle parking space"
          value={formData.notes}
          onChange={(e) => onChange('notes', e.target.value)}
          className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <button
        type="submit"
        className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
      >
        <MessageSquare className="w-4 h-4" />
        <span>Send Inquiry via WhatsApp</span>
      </button>
    </form>
  );
}
