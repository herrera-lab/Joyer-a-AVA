export function openWhatsApp(message = 'Hola, quiero consultar una pieza.') {
  const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
}
