import { CONTACT_INFO } from "../../../constants/contact";

/**
 * Builds the URL-encoded WhatsApp redirection message for booking inquiries
 */
export function buildInquiryWhatsAppUrl(formData, locations = []) {
  const branchObj = locations.find((l) => l.id === formData.branch);
  const branchName = branchObj ? branchObj.name : "AndalKost";

  const message = `Halo AndalKost Admin,\n\nNama: ${formData.name}\nWA: ${formData.phone}\nLokasi: ${branchName}\nTipe: ${formData.roomType}\nRencana: ${formData.moveInDate}\n\nMohon info ketersediaan unit.`;

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CONTACT_INFO.phone}?text=${encoded}`;
}
