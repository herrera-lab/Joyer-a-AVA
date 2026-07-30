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
    lines.push(`• ${item.qty}x ${item.name}${variant} — ${formatPrice(item.price * item.qty, lang)}`);
  });

  lines.push('');
  lines.push(
    `${lang === 'en' ? 'Subtotal' : 'Subtotal'}: ${formatPrice(getCartTotal(), lang)}`
  );
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
