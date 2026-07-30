import { getCurrentRoute, onRouteChange } from './router.js';
import { state, subscribe } from './state.js';
import { qs, qsa, escapeHtml, showToast } from '../utils/dom.js';
import { debounce } from '../utils/helpers.js';

import { initI18n, t } from '../features/i18n.js';
import { initAccessibility } from '../features/accessibility.js';
import { initBackToTop, initRevealOnScroll } from '../features/scroll.js';
import { initCartDrawer, cartPage } from '../pages/cart.js';
import { addToCart, getCartCount } from '../features/cart.js';
import { getProductById, getCategories } from '../features/catalog.js';
import { searchProducts } from '../features/search.js';
import { ROUTES } from '../config/routes.js';

import { renderHome } from '../pages/home.js';
import { renderCategory } from '../pages/category.js';
import { renderProductDetail } from '../pages/product-detail.js';
import { renderAbout } from '../pages/about.js';
import { renderContact } from '../pages/contact.js';
import { renderPolicies } from '../pages/policies.js';

function renderRoute(route) {
  const app = qs('#app');
  if (!app) return;

  switch (route.page) {
    case 'category':
      renderCategory(app, route.params);
      break;
    case 'product':
      renderProductDetail(app, route.params);
      break;
    case 'about':
      renderAbout(app);
      break;
    case 'contact':
      renderContact(app);
      break;
    case 'policies':
      renderPolicies(app);
      break;
    case 'cart':
      renderHome(app);
      cartPage();
      break;
    default:
      renderHome(app);
  }

  window.scrollTo(0, 0);
  initRevealOnScroll(app);
}

function wireAddToCartDelegation() {
  qs('#app')?.addEventListener('click', (event) => {
    const btn = event.target.closest('[data-add-to-cart]');
    if (!btn) return;
    const product = getProductById(btn.dataset.addToCart);
    if (!product) return;
    addToCart(product);
    showToast(t('added_to_cart'));
  });
}

function renderCollectionsMenu() {
  const menu = qs('#collectionsMenu');
  if (!menu) return;

  menu.innerHTML = getCategories()
    .map((category) => {
      const label = state.language === 'en' ? category.label_en : category.label_es;
      return `<li role="none"><a role="menuitem" href="${ROUTES.category(category.slug)}">${escapeHtml(label)}</a></li>`;
    })
    .join('');
}

function wireNavDropdown() {
  const toggle = qs('#collectionsToggle');
  const menu = qs('#collectionsMenu');
  if (!toggle || !menu) return;

  function close() {
    menu.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });

  document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && event.target !== toggle) close();
  });

  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) close();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') close();
  });
}

function wireSearch() {
  const input = qs('#searchInput');
  const results = qs('#searchResults');
  if (!input || !results) return;

  function renderResults(term) {
    const matches = searchProducts(term);
    if (matches.length === 0) {
      results.innerHTML = '';
      results.classList.remove('open');
      return;
    }

    results.innerHTML = matches
      .map(
        (p) =>
          `<a href="${ROUTES.product(p.id)}" class="search-result">
            <img src="${p.image}" alt="" loading="lazy" />
            <span>${escapeHtml(p.name)}</span>
          </a>`
      )
      .join('');
    results.classList.add('open');
  }

  input.addEventListener(
    'input',
    debounce(() => renderResults(input.value), 200)
  );

  results.addEventListener('click', () => {
    input.value = '';
    results.innerHTML = '';
    results.classList.remove('open');
  });

  document.addEventListener('click', (event) => {
    if (event.target !== input && !results.contains(event.target)) {
      results.classList.remove('open');
    }
  });
}

function updateCartBadges() {
  qsa('.cart-count').forEach((el) => {
    el.textContent = String(getCartCount());
  });
}

export function initApp() {
  initI18n();
  initAccessibility();
  initCartDrawer();
  initBackToTop();
  wireAddToCartDelegation();
  wireNavDropdown();
  wireSearch();
  renderCollectionsMenu();

  subscribe('cart', updateCartBadges);
  subscribe('language', () => {
    renderCollectionsMenu();
    renderRoute(getCurrentRoute());
  });
  updateCartBadges();

  onRouteChange(renderRoute);
  renderRoute(getCurrentRoute());
}
