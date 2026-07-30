import { t, translateDom } from '../features/i18n.js';
import { escapeHtml } from '../utils/dom.js';
import { POLICIES } from '../config/constants.js';

function listSection(titleKey, items) {
  return `
    <section class="policy-section" data-reveal>
      <h2>${t(titleKey)}</h2>
      <ul>${items.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}</ul>
    </section>`;
}

export function renderPolicies(container) {
  container.innerHTML = `
    <main class="wrap policies-page">
      <h1>${t('policies_title')}</h1>
      ${listSection('policies_shipping', POLICIES.shipping_es)}
      ${listSection('policies_returns', POLICIES.returns_es)}
      ${listSection('policies_terms', POLICIES.terms_es)}
      ${listSection('policies_privacy', POLICIES.privacy_es)}
    </main>
  `;

  translateDom(container);
}
