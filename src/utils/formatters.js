/**
 * Formats a numeric amount to Indonesian Rupiah currency string (IDR)
 * e.g. 1850000 -> "Rp 1.850.000"
 */
export const formatCurrencyIDR = (value) => {
  if (typeof value !== 'number') return 'Rp 0';
  return `Rp ${value.toLocaleString('id-ID')}`;
};
