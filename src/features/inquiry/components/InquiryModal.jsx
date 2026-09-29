import { CheckCircle2 } from "lucide-react";
import Modal from "../../../components/ui/Modal";
import InquiryForm from "./InquiryForm";

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
  onReopen,
}) {
  return (
    <Modal
      ariaLabel="Inquiry form"
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="max-w-xl"
    >
      <div className="border-b border-[#DCDAD3] p-8 pb-6 lg:p-12 lg:pb-6">
        <span className="mb-2 block text-[10px] font-semibold uppercase tracking-widest text-[#8A9678]">
          DIRECT BOOKING
        </span>
        <h2 className="font-display text-3xl uppercase tracking-tight">
          INQUIRY.
        </h2>
      </div>

      {isSubmitted ? (
        <div className="flex flex-col items-center px-8 py-12 text-center lg:px-12">
          <CheckCircle2
            aria-hidden="true"
            className="mb-6 h-16 w-16 text-[#8A9678]"
          />
          <h3 className="mb-2 font-display text-2xl uppercase tracking-tight">
            REQUEST SENT
          </h3>
          <p className="mb-8 text-xs uppercase tracking-widest text-[#77756F]">
            Redirecting to WhatsApp...
          </p>
          <button
            onClick={onReopen}
            className="bg-[#171717] px-8 py-3 text-xs font-semibold uppercase tracking-widest text-[#F5F4EF]"
            type="button"
          >
            OPEN WHATSAPP MANUALLY
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
