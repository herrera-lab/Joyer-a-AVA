export function formatPrice(value, lang = 'es') {
  return new Intl.NumberFormat(lang === 'en' ? 'en-US' : 'es-CR', {
    style: 'currency',
    currency: 'CRC',
    maximumFractionDigits: 0
  }).format(value);
}

export function formatWeeks(weeks, lang = 'es') {
  if (lang === 'en') return `${weeks} week${weeks === 1 ? '' : 's'}`;
  return `${weeks} semana${weeks === 1 ? '' : 's'}`;
}
