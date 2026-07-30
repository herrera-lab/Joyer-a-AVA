import { t, translateDom } from '../features/i18n.js';
import { state } from '../core/state.js';
import { escapeHtml } from '../utils/dom.js';
import { CONTACT, waLink } from '../config/constants.js';

export function renderContact(container) {
  const hours = state.language === 'en' ? CONTACT.hours_en : CONTACT.hours_es;

  container.innerHTML = `
    <main class="wrap contact-page">
      <section class="contact-section" data-reveal>
        <h1>${t('contact_title')}</h1>

        <a class="wa-btn contact-wa-btn" href="${waLink(
          state.language === 'en' ? 'Hi! I have a question.' : '¡Hola! Tengo una consulta.'
        )}" target="_blank" rel="noopener noreferrer">${t('contact_whatsapp')}</a>

        <dl class="contact-list">
          <div>
            <dt>${t('contact_email')}</dt>
            <dd><a href="mailto:${CONTACT.email}">${CONTACT.email}</a></dd>
          </div>
          <div>
            <dt>${t('contact_hours')}</dt>
            <dd>${escapeHtml(hours || CONTACT.hours_es)}</dd>
          </div>
          <div>
            <dt>${t('contact_social')}</dt>
            <dd>
              <a href="${CONTACT.instagram}" target="_blank" rel="noopener noreferrer">Instagram</a> ·
              <a href="${CONTACT.facebook}" target="_blank" rel="noopener noreferrer">Facebook</a>
            </dd>
          </div>
        </dl>
      </section>
    </main>
  `;

  translateDom(container);
}
