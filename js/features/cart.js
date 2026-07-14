import { state, updateState } from '../core/state.js';

export function addToCart(product) {
  const exists = state.cart.find(item => item.id === product.id);

  if (exists) {
    exists.quantity += 1;
  } else {
    state.cart.push({ ...product, quantity: 1 });
  }

  updateState('cart', state.cart);
  return state.cart;
}

export function getCartCount() {
  return state.cart.reduce((count, item) => count + item.quantity, 0);
}
