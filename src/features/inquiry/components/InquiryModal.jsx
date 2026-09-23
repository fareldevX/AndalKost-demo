import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import Modal from '../../../components/ui/Modal';
import InquiryForm from './InquiryForm';

/**
 * Direct booking inquiry modal with WhatsApp generation workflow
 */
export default function InquiryModal({
  isOpen,
  onClose,
  formData,
  onChange,
  onSubmit,
  isSubmitted,
  onReopen
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose} maxWidth="max-w-lg">
      <div>
        <span className="text-xs font-bold text-orange-600 uppercase tracking-widest">
          Direct Booking Inquiry
        </span>
        <h3 className="text-2xl font-bold text-slate-900 mt-1">Book or Check Availability</h3>
        <p className="text-xs text-slate-500 mt-1">
          Fill in your preference to generate a direct WhatsApp message to our house manager.
        </p>
      </div>

      {isSubmitted ? (
        <div className="p-6 bg-emerald-50 rounded-2xl text-center space-y-3 border border-emerald-200">
          <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
          <h4 className="text-lg font-bold text-emerald-900">Inquiry Link Redirected!</h4>
          <p className="text-xs text-emerald-700">
            Your formatted message has been opened in WhatsApp. If it didn't open automatically, click the button below.
          </p>
          <button
            onClick={onReopen}
            className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-xs shadow-md"
          >
            Re-open WhatsApp
          </button>
        </div>
      ) : (
        <InquiryForm
          formData={formData}
          onChange={onChange}
          onSubmit={onSubmit}
        />
      )}
    </Modal>
  );
}
