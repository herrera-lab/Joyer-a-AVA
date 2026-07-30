import { qs, qsa } from '../utils/dom.js';

let backToTopWired = false;

export function initBackToTop() {
  if (backToTopWired) return;
  backToTopWired = true;

  const button = qs('#backToTop');
  if (!button) return;

  window.addEventListener('scroll', () => {
    button.classList.toggle('show', window.scrollY > 400);
  });

  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

export function initRevealOnScroll(scope = document) {
  const items = qsa('[data-reveal]', scope);
  if (items.length === 0) return;

  if (!('IntersectionObserver' in window)) {
    items.forEach((item) => item.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  items.forEach((item) => observer.observe(item));
}
