import { waLink, BRAND } from '../config/constants.js';
import { formatPrice } from '../utils/format.js';
import { getCartTotal } from './cart.js';
import { state } from '../core/state.js';

export function buildOrderMessage(cart, lang = 'es') {
  const lines =
    lang === 'en'
      ? [`Hi ${BRAND.name}! I'd like to order:`]
      : [`¡Hola ${BRAND.name}! Quiero pedir:`];

  cart.forEach((item) => {
    const variant = item.variant ? ` (${item.variant})` : '';
    const itemName = lang === 'en' ? item.nameEn || item.name : item.name;
    const lineTotal = typeof item.price === 'number' && Number.isFinite(item.price) ? item.price * item.qty : item.price;
    lines.push(`• ${item.qty}x ${itemName}${variant} — ${formatPrice(lineTotal, lang)}`);
  });

  lines.push('');
  lines.push(`Subtotal: ${formatPrice(getCartTotal(), lang)}`);
  lines.push(
    lang === 'en'
      ? 'Could you confirm availability, shipping cost and payment method?'
      : '¿Me confirmás disponibilidad, costo de envío y forma de pago?'
  );

  return lines.join('\n');
}

export function openWhatsAppOrder() {
  const message = buildOrderMessage(state.cart, state.language);
  window.open(waLink(message), '_blank', 'noopener,noreferrer');
}

export function openWhatsAppInquiry(productName) {
  const message =
    state.language === 'en'
      ? `Hi! I have a question about: ${productName}`
      : `¡Hola! Tengo una consulta sobre: ${productName}`;
  window.open(waLink(message), '_blank', 'noopener,noreferrer');
}
