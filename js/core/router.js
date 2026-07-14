import { routeMap } from '../config/routes.js';
import { getPageKey } from '../utils/helpers.js';

export function resolvePage(pathname = typeof window !== 'undefined' ? window.location.pathname : '/') {
  const key = getPageKey(pathname);
  return routeMap[key] || 'home';
}
