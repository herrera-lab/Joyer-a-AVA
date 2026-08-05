import { t, translateDom } from '../features/i18n.js';
import { escapeHtml } from '../utils/dom.js';
import { state } from '../core/state.js';
import { POLICIES } from '../config/constants.js';

function listSection(titleKey, items) {
  return `
    <section class="policy-section" data-reveal>
      <h2>${t(titleKey)}</h2>
      <ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
    </section>`;
}

export function renderPolicies(container) {
  const lang = state.language;
  container.innerHTML = `
    <main class="wrap policies-page">
      <h1>${t('policies_title')}</h1>
      ${listSection('policies_shipping', lang === 'en' ? POLICIES.shipping_en : POLICIES.shipping_es)}
      ${listSection('policies_returns', lang === 'en' ? POLICIES.returns_en : POLICIES.returns_es)}
      ${listSection('policies_terms', lang === 'en' ? POLICIES.terms_en : POLICIES.terms_es)}
    </main>
  `;

  translateDom(container);
}
