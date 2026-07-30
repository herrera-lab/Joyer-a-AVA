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
  const subcatsEs = category.subcats_es;
  const subcatsLabel = state.language === 'en' ? category.subcats_en : category.subcats_es;

  let activeSub = null;
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
        <div class="subcat-row" role="group" aria-label="${t('subcat_filter_aria')}">
          <button class="chip" type="button" data-sub="" aria-pressed="true">${t('subcat_all')}</button>
          ${subcatsEs
            .map(
              (sub, i) =>
                `<button class="chip" type="button" data-sub="${escapeHtml(sub)}" aria-pressed="false">${escapeHtml(subcatsLabel[i])}</button>`
            )
            .join('')}
        </div>
        <label class="sort-select">
          <span class="sr-only">${t('sort_label')}</span>
          <select id="sortSelect">
            <option value="relevancia">${t('sort_relevancia')}</option>
            <option value="precio_asc">${t('sort_precio_asc')}</option>
            <option value="precio_desc">${t('sort_precio_desc')}</option>
            <option value="nuevo">${t('sort_nuevo')}</option>
          </select>
        </label>
      </div>

      <div class="product-grid" id="productGrid"></div>
    </main>
  `;

  function renderGrid() {
    const products = sortProducts(getProductsByCategory(category.slug, activeSub || null), activeSort);
    const grid = qs('#productGrid', container);
    grid.innerHTML =
      products.length > 0
        ? products.map(productCardHtml).join('')
        : `<p class="empty-state">${t('empty_category')}</p>`;
  }

  qsa('.chip', container).forEach((chip) => {
    chip.addEventListener('click', () => {
      activeSub = chip.dataset.sub || null;
      qsa('.chip', container).forEach((c) => c.setAttribute('aria-pressed', String(c === chip)));
      renderGrid();
    });
  });

  qs('#sortSelect', container).addEventListener('change', (e) => {
    activeSort = e.target.value;
    renderGrid();
  });

  qs('#backBtn', container).addEventListener('click', () => {
    window.location.hash = ROUTES.home();
  });

  renderGrid();
  translateDom(container);
}
