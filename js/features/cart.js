import { state, setCart } from '../core/state.js';

function sameLine(a, b) {
  return a.id === b.id && (a.variant || '') === (b.variant || '');
}

export function addToCart(product, variant = '') {
  const line = {
    id: product.id,
    name: product.name,
    nameEn: product.name_en || product.name,
    image: product.image,
    price: product.price,
    category: product.category,
    variant
  };
  const cart = [...state.cart];
  const existing = cart.find((item) => sameLine(item, line));

  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...line, qty: 1 });
  }

  setCart(cart);
  return cart;
}

export function removeFromCart(id, variant = '') {
  const cart = state.cart.filter((item) => !(item.id === id && (item.variant || '') === variant));
  setCart(cart);
  return cart;
}

export function setQty(id, variant, qty) {
  const cart = state.cart
    .map((item) =>
      item.id === id && (item.variant || '') === variant ? { ...item, qty: Math.max(1, qty) } : item
    )
    .filter((item) => item.qty > 0);
  setCart(cart);
  return cart;
}

export function clearCart() {
  setCart([]);
}

export function getCartCount() {
  return state.cart.reduce((count, item) => count + item.qty, 0);
}

export function getCartTotal() {
  return state.cart.reduce((total, item) => total + item.price * item.qty, 0);
}
