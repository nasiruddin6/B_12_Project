import { useEffect, useMemo, useState } from 'react';
import { toast } from 'react-toastify';
import InstalledAppCard from '../components/InstalledAppCard';
import { getInstalledApps, uninstallApp } from '../utils/storage';

export default function Installation() {
  const [installed, setInstalled] = useState([]);
  const [sort, setSort] = useState('high-low');

  useEffect(() => {
    setInstalled(getInstalledApps());
  }, []);

  const sortedApps = useMemo(() => {
    const list = [...installed];
    if (sort === 'high-low') {
      return list.sort((a, b) => b.downloads - a.downloads);
    }
    return list.sort((a, b) => a.downloads - b.downloads);
  }, [installed, sort]);

  const handleUninstall = (app) => {
    const next = uninstallApp(app.id);
    setInstalled(next);
    toast.info(`${app.title} has been uninstalled.`);
  };

  return (
    <section className="section container page-installation">
      <div className="section__head">
        <h2>Your Installed Apps</h2>
        <p>Explore All Trending Apps on the Market developed by us</p>
      </div>

      <div className="apps-toolbar">
        <p className="apps-toolbar__count">{sortedApps.length} Apps Found</p>
        <label className="sort-select">
          <span className="visually-hidden">Sort by downloads</span>
          <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort by downloads">
            <option value="high-low">High-Low</option>
            <option value="low-high">Low-High</option>
          </select>
        </label>
      </div>

      {sortedApps.length === 0 ? (
        <p className="empty-message">No apps installed yet. Visit Apps to install one.</p>
      ) : (
        <div className="installed-list">
          {sortedApps.map((app) => (
            <InstalledAppCard key={app.id} app={app} onUninstall={handleUninstall} />
          ))}
        </div>
      )}
    </section>
  );
}
