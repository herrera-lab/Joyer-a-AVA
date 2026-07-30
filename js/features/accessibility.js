import { state, setAccessibility, resetAccessibility, subscribe } from '../core/state.js';
import { qs, qsa, trapFocus } from '../utils/dom.js';

const FONT_SIZE_CLASSES = ['a11y-fs-0', 'a11y-fs-1', 'a11y-fs-2'];

export function applyAccessibility() {
  const { fontSize, darkMode, reducedMotion, underlineLinks } = state.accessibility;
  const html = document.documentElement;

  FONT_SIZE_CLASSES.forEach((cls, i) => html.classList.toggle(cls, i === fontSize));
  document.body.classList.toggle('a11y-dark', darkMode);
  document.body.classList.toggle('a11y-reduce-motion', reducedMotion);
  document.body.classList.toggle('a11y-underline', underlineLinks);

  const darkToggle = qs('#a11yDark');
  const motionToggle = qs('#a11yMotion');
  const underlineToggle = qs('#a11yUnderline');
  if (darkToggle) darkToggle.checked = darkMode;
  if (motionToggle) motionToggle.checked = reducedMotion;
  if (underlineToggle) underlineToggle.checked = underlineLinks;

  qsa('.a11y-fontsize button').forEach((btn) => {
    const level = Number(btn.dataset.fs);
    btn.setAttribute('aria-pressed', String(level === fontSize));
  });
}

let releaseFocusTrap = () => {};
let openerButton = null;

function openPanel(panel, fab) {
  panel.classList.add('open');
  fab.setAttribute('aria-expanded', 'true');
  openerButton = fab;
  releaseFocusTrap = trapFocus(panel);
  const firstFocusable = panel.querySelector('button, input');
  firstFocusable?.focus();
  document.addEventListener('keydown', onKeydown);
}

function closePanel(panel, fab) {
  panel.classList.remove('open');
  fab.setAttribute('aria-expanded', 'false');
  releaseFocusTrap();
  document.removeEventListener('keydown', onKeydown);
  openerButton?.focus();
}

function onKeydown(event) {
  if (event.key !== 'Escape') return;
  const panel = qs('#a11yPanel');
  const fab = qs('#a11yFab');
  if (panel && fab) closePanel(panel, fab);
}

export function initAccessibility() {
  const fab = qs('#a11yFab');
  const panel = qs('#a11yPanel');
  const closeBtn = qs('#a11yClose');

  if (!fab || !panel) return;

  fab.addEventListener('click', () => {
    if (panel.classList.contains('open')) {
      closePanel(panel, fab);
    } else {
      openPanel(panel, fab);
    }
  });

  closeBtn?.addEventListener('click', () => closePanel(panel, fab));

  qsa('.a11y-fontsize button').forEach((btn) => {
    btn.addEventListener('click', () => setAccessibility({ fontSize: Number(btn.dataset.fs) }));
  });

  qs('#a11yDark')?.addEventListener('change', (e) => setAccessibility({ darkMode: e.target.checked }));
  qs('#a11yMotion')?.addEventListener('change', (e) =>
    setAccessibility({ reducedMotion: e.target.checked })
  );
  qs('#a11yUnderline')?.addEventListener('change', (e) =>
    setAccessibility({ underlineLinks: e.target.checked })
  );
  qs('#a11yReset')?.addEventListener('click', () => resetAccessibility());

  subscribe('accessibility', applyAccessibility);
  applyAccessibility();
}
