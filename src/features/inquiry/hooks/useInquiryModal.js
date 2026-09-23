import { useState } from 'react';
import { buildInquiryWhatsAppUrl } from '../utils/whatsapp';

/**
 * Custom hook to manage the booking inquiry modal and WhatsApp submission workflow
 */
export function useInquiryModal(defaultBranch = 'depok-campus', defaultRoom = 'Standard Cozy Studio') {
  const [isOpen, setIsOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    branch: defaultBranch,
    roomType: defaultRoom,
    moveInDate: '',
    tenantType: 'Student',
    notes: ''
  });

  const openInquiry = (roomName = '') => {
    if (roomName) {
      setFormData((prev) => ({ ...prev, roomType: roomName }));
    }
    setFormSubmitted(false);
    setIsOpen(true);
  };

  const closeInquiry = () => {
    setIsOpen(false);
    setFormSubmitted(false);
  };

  const updateField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e, locations = []) => {
    if (e && e.preventDefault) {
      e.preventDefault();
    }
    const url = buildInquiryWhatsAppUrl(formData, locations);
    window.open(url, '_blank');
    setFormSubmitted(true);
  };

  const reopenWhatsApp = (locations = []) => {
    const url = buildInquiryWhatsAppUrl(formData, locations);
    window.open(url, '_blank');
  };

  return {
    isOpen,
    formSubmitted,
    formData,
    openInquiry,
    closeInquiry,
    updateField,
    handleSubmit,
    reopenWhatsApp
  };
}
