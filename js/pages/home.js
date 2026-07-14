import { getFeaturedProducts } from '../features/catalog.js';
import { initAccessibility } from '../features/accessibility.js';
import { initI18n } from '../features/i18n.js';
import { initScrollEffects } from '../features/scroll.js';

export function homePage() {
  const products = getFeaturedProducts();
  console.log('Home inicializada con productos destacados', products);

  initAccessibility();
  initI18n();
  initScrollEffects();
}
