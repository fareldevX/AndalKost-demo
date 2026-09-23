import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Modal from '../../../components/ui/Modal';
import { formatCurrencyIDR } from '../../../utils/formatters';

/**
 * Room specification and photo gallery inspection modal
 */
export default function RoomDetailModal({ room, onClose, onInquire }) {
  if (!room) return null;

  return (
    <Modal
      isOpen={Boolean(room)}
      onClose={onClose}
      maxWidth="max-w-2xl"
      className="max-h-[90vh] overflow-y-auto"
    >
      {/* Modal Image Slider Gallery */}
      <div className="space-y-3">
        <div className="h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-100">
          <img
            src={room.images[0]}
            alt={room.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {room.images.map((imgUrl, i) => (
            <div
              key={i}
              className="h-20 rounded-xl overflow-hidden bg-slate-100 border border-slate-200"
            >
              <img src={imgUrl} alt="Thumbnail" className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </div>

      <div>
        <span className="px-3 py-1 rounded-full bg-orange-100 text-orange-700 text-xs font-bold uppercase">
          {room.badge}
        </span>
        <h3 className="text-2xl font-bold text-slate-900 mt-2">{room.name}</h3>
        <p className="text-sm text-slate-600 mt-1 leading-relaxed">{room.description}</p>
      </div>

      {/* Room Specs */}
      <div className="bg-slate-50 p-4 rounded-2xl space-y-3 border border-slate-200">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
          Included Room Inclusions
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-slate-700">
          {room.features.map((feat, i) => (
            <div key={i} className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <span>{feat}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-2 border-t border-slate-200">
        <div>
          <p className="text-xs text-slate-400">Monthly Starting Rate</p>
          <p className="text-2xl font-extrabold text-slate-900">
            {formatCurrencyIDR(room.priceMonthly)}
          </p>
        </div>
        <button
          onClick={() => {
            const roomName = room.name;
            onClose();
            onInquire(roomName);
          }}
          className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md"
        >
          Inquire Ketersediaan
        </button>
      </div>
    </Modal>
  );
}
