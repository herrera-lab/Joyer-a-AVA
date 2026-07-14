import { sampleProducts } from '../config/products.js';

export function searchProducts(term) {
  const normalized = term.trim().toLowerCase();

  if (!normalized) return sampleProducts;

  return sampleProducts.filter(product =>
    product.name.toLowerCase().includes(normalized) ||
    product.description.toLowerCase().includes(normalized)
  );
}
