import { CONTACT_INFO } from '../../../constants/contact';

/**
 * Builds the URL-encoded WhatsApp redirection message for booking inquiries
 */
export function buildInquiryWhatsAppUrl(formData, locations = []) {
  const branchObj = locations.find((l) => l.id === formData.branch);
  const branchName = branchObj ? branchObj.name : 'AndalKost';

  const message =
    `Halo AndalKost Admin! Saya mau tanya ketersediaan kamar:\n\n` +
    `👤 Nama: ${formData.name || 'Calon Penghuni'}\n` +
    `📱 No HP: ${formData.phone || '-'}\n` +
    `📍 Lokasi Branch: ${branchName}\n` +
    `🛏️ Tipe Kamar: ${formData.roomType}\n` +
    `🎓 Status: ${formData.tenantType}\n` +
    `📅 Rencana Masuk: ${formData.moveInDate || 'Bulan Ini'}\n` +
    `💬 Catatan Tambahan: ${formData.notes || '-'}\n\n` +
    `Apakah kamar masih ready? Mohon info detailnya. Terima kasih!`;

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${CONTACT_INFO.phone}?text=${encoded}`;
}
