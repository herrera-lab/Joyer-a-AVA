// Rutas con hash para hosting estático
export const ROUTES = {
  home: () => '#/',
  category: (slug) => `#/categoria/${slug}`,
  product: (id) => `#/producto/${id}`,
  cart: () => '#/carrito',
  about: () => '#/nosotros',
  contact: () => '#/contacto',
  policies: () => '#/politicas'
};

const PATTERNS = [
  { page: 'category', regex: /^\/categoria\/([^/]+)$/, params: ['slug'] },
  { page: 'product', regex: /^\/producto\/([^/]+)$/, params: ['id'] },
  { page: 'cart', regex: /^\/carrito$/, params: [] },
  { page: 'about', regex: /^\/nosotros$/, params: [] },
  { page: 'contact', regex: /^\/contacto$/, params: [] },
  { page: 'policies', regex: /^\/politicas$/, params: [] }
];

export function matchRoute(hash) {
  const path = (hash || '#/').replace(/^#/, '') || '/';

  for (const { page, regex, params } of PATTERNS) {
    const match = path.match(regex);
    if (match) {
      const result = {};
      params.forEach((name, i) => {
        result[name] = decodeURIComponent(match[i + 1]);
      });
      return { page, params: result };
    }
  }

  return { page: 'home', params: {} };
}
