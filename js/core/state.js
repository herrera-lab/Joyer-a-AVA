import { readStorage, writeStorage } from '../utils/storage.js';

const DEFAULT_ACCESSIBILITY = {
  fontSize: 0, // 0 = A, 1 = A+, 2 = A++
  darkMode: false,
  reducedMotion: false,
  underlineLinks: false
};

export const state = {
  cart: readStorage('creativas-cart', []),
  language: readStorage('creativas-language', 'es'),
  accessibility: readStorage('creativas-accessibility', DEFAULT_ACCESSIBILITY)
};

const listeners = { cart: [], language: [], accessibility: [] };

export function subscribe(key, callback) {
  listeners[key].push(callback);
  return () => {
    listeners[key] = listeners[key].filter((cb) => cb !== callback);
  };
}

function notify(key) {
  listeners[key].forEach((cb) => cb(state[key]));
}

export function setCart(cart) {
  state.cart = cart;
  writeStorage('creativas-cart', cart);
  notify('cart');
}

export function setLanguage(language) {
  state.language = language;
  writeStorage('creativas-language', language);
  notify('language');
}

export function setAccessibility(partial) {
  state.accessibility = { ...state.accessibility, ...partial };
  writeStorage('creativas-accessibility', state.accessibility);
  notify('accessibility');
}

export function resetAccessibility() {
  state.accessibility = { ...DEFAULT_ACCESSIBILITY };
  writeStorage('creativas-accessibility', state.accessibility);
  notify('accessibility');
}
