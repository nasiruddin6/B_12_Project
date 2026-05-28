const STORAGE_KEY = 'hero-io-installed-apps';

export function getInstalledApps() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function saveInstalledApps(apps) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(apps));
}

export function installApp(app) {
  const installed = getInstalledApps();
  if (installed.some((item) => item.id === app.id)) {
    return installed;
  }
  const next = [...installed, app];
  saveInstalledApps(next);
  return next;
}

export function uninstallApp(id) {
  const next = getInstalledApps().filter((item) => item.id !== id);
  saveInstalledApps(next);
  return next;
}

export function isAppInstalled(id) {
  return getInstalledApps().some((item) => item.id === id);
}
