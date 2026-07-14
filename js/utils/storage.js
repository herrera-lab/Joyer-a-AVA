function getStorage() {
  if (typeof window !== 'undefined' && window.localStorage) {
    return window.localStorage;
  }

  return null;
}

export function readStorage(key, fallback = null) {
  const storage = getStorage();

  if (!storage) {
    return fallback;
  }

  try {
    const value = storage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch (error) {
    console.warn('No se pudo leer el almacenamiento local', error);
    return fallback;
  }
}

export function writeStorage(key, value) {
  const storage = getStorage();

  if (!storage) {
    return;
  }

  try {
    storage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.warn('No se pudo guardar en el almacenamiento local', error);
  }
}
