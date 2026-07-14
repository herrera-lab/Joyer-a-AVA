export function initScrollEffects() {
  if (typeof document === 'undefined' || typeof window === 'undefined') {
    return;
  }

  const button = document.querySelector('[data-scroll-top]');

  if (!button) return;

  window.addEventListener('scroll', () => {
    button.style.display = window.scrollY > 300 ? 'flex' : 'none';
  });
}
