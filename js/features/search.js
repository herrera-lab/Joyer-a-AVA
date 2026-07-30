import { PRODUCTS, CATEGORIES } from '../config/products.js';

export function searchProducts(term) {
  const normalized = term.trim().toLowerCase();
  if (!normalized) return [];

  const categoryMatch = CATEGORIES.filter(
    (c) =>
      c.label_es.toLowerCase().includes(normalized) || c.label_en.toLowerCase().includes(normalized)
  ).map((c) => c.slug);

  return PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(normalized) ||
      p.material_es.toLowerCase().includes(normalized) ||
      categoryMatch.includes(p.category)
  ).slice(0, 8);
}
