import { getCategory, getProductsByCategory, productCardHtml, sortProducts } from '../features/catalog.js';
import { t, translateDom } from '../features/i18n.js';
import { state } from '../core/state.js';
import { escapeHtml, qs, qsa } from '../utils/dom.js';
import { ROUTES } from '../config/routes.js';

export function renderCategory(container, params) {
  const category = getCategory(params.slug);

  if (!category) {
    container.innerHTML = `<div class="wrap detail-head"><p>${t('product_not_found')}</p></div>`;
    return;
  }

  const label = state.language === 'en' ? category.label_en : category.label_es;
  const tagline = state.language === 'en' ? category.tagline_en : category.tagline_es;

  let activeSort = 'relevancia';

  container.innerHTML = `
    <main class="wrap category-view-inner">
      <button class="back-btn" type="button" id="backBtn">${t('back_to_inicio')}</button>
      <p class="breadcrumb"><a href="${ROUTES.home()}">${t('breadcrumb_inicio')}</a> / <b>${escapeHtml(label)}</b></p>

      <div class="detail-head">
        <span class="eyebrow">${t('nav_colecciones')}</span>
        <h2>${escapeHtml(label)}</h2>
        <p>${escapeHtml(tagline)}</p>
      </div>

      <div class="filter-bar">
        <div class="sort-row" role="group" aria-label="${t('sort_label')}">
          <button class="chip" type="button" data-sort="precio_asc" aria-pressed="false">${t('sort_precio_asc')}</button>
          <button class="chip" type="button" data-sort="precio_desc" aria-pressed="false">${t('sort_precio_desc')}</button>
        </div>
      </div>

      <div class="product-grid" id="productGrid"></div>
    </main>
  `;

  function renderGrid() {
    const products = sortProducts(getProductsByCategory(category.slug, null), activeSort);
    const grid = qs('#productGrid', container);
    grid.innerHTML =
      products.length > 0
        ? products.map(productCardHtml).join('')
        : `<p class="empty-state">${t('empty_category')}</p>`;
  }

  qsa('.sort-row .chip', container).forEach((chip) => {
    chip.addEventListener('click', () => {
      const isActive = chip.getAttribute('aria-pressed') === 'true';
      activeSort = isActive ? 'relevancia' : chip.dataset.sort;
      qsa('.sort-row .chip', container).forEach((c) => c.setAttribute('aria-pressed', String(!isActive && c === chip)));
      renderGrid();
    });
  });

  qs('#backBtn', container).addEventListener('click', () => {
    window.location.hash = ROUTES.home();
  });

  renderGrid();
  translateDom(container);
}
