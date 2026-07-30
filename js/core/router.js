import { matchRoute } from '../config/routes.js';

export function getCurrentRoute() {
  return matchRoute(window.location.hash);
}

export function onRouteChange(callback) {
  window.addEventListener('hashchange', () => callback(getCurrentRoute()));
}
