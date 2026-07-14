import { getProductsByCategory } from '../features/catalog.js';

export function categoryPage() {
  const category = window.location.pathname.split('/').filter(Boolean).pop() || 'anillos';
  const products = getProductsByCategory(category);
  console.log(`Categoría ${category} inicializada`, products);
}
