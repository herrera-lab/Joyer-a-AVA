import { state, setLanguage, subscribe } from '../core/state.js';
import { translate } from '../config/i18n.js';
import { qs, qsa } from '../utils/dom.js';

export function t(key, ...args) {
  return translate(state.language, key, ...args);
}

export function translateDom(scope = document) {
  qsa('[data-i18n]', scope).forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  qsa('[data-i18n-aria]', scope).forEach((node) => {
    node.setAttribute('aria-label', t(node.dataset.i18nAria));
  });
  qsa('[data-i18n-placeholder]', scope).forEach((node) => {
    node.setAttribute('placeholder', t(node.dataset.i18nPlaceholder));
  });

  const langBtn = qs('#langBtn', scope);
  if (langBtn) {
    langBtn.textContent = state.language === 'es' ? 'EN' : 'ES';
  }
}

export function initI18n() {
  document.documentElement.lang = state.language;

  qsa('#langBtn').forEach((btn) => {
    btn.addEventListener('click', () => {
      setLanguage(state.language === 'es' ? 'en' : 'es');
    });
  });

  subscribe('language', (lang) => {
    document.documentElement.lang = lang;
    translateDom();
  });

  translateDom();
}
