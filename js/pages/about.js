import { t, translateDom } from '../features/i18n.js';
import { state } from '../core/state.js';
import { escapeHtml } from '../utils/dom.js';
import { BRAND } from '../config/constants.js';

export function renderAbout(container) {
  const history = state.language === 'en' ? BRAND.history_en : BRAND.history_es;
  const mission = state.language === 'en' ? BRAND.mission_en : BRAND.mission_es;

  container.innerHTML = `
    <main class="wrap about-page">
      <section class="about-section" data-reveal>
        <span class="eyebrow">${BRAND.name}</span>
        <h1>${t('about_title')}</h1>
        <p>${escapeHtml(history)}</p>
      </section>
      <section class="about-section" data-reveal>
        <h2>${t('about_mission_title')}</h2>
        <p>${escapeHtml(mission)}</p>
      </section>
    </main>
  `;

  translateDom(container);
}
