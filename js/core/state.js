import { readStorage, writeStorage } from '../utils/storage.js';

export const state = {
  cart: readStorage('ava-cart', []),
  language: readStorage('ava-language', 'es'),
  accessibility: readStorage('ava-accessibility', {
    darkMode: false,
    reducedMotion: false,
    underlineLinks: false,
    fontSize: 'medium'
  })
};

export function updateState(key, value) {
  state[key] = value;
  if (key === 'cart' || key === 'language' || key === 'accessibility') {
    writeStorage(`ava-${key}`, value);
  }
}
