export function getPageKey(pathname = typeof window !== 'undefined' ? window.location.pathname : '/') {
  return pathname.replace(/\/$/, '') || '/';
}

export function debounce(fn, delay = 200) {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}
