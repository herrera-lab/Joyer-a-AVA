import { sampleProducts } from '../config/products.js';

export function getFeaturedProducts() {
  return sampleProducts.filter(product => product.featured);
}

export function getProductsByCategory(category) {
  return sampleProducts.filter(product => product.category === category);
}
