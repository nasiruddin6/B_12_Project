import { useEffect, useMemo, useState } from 'react';
import AppCard from '../components/AppCard';
import LoadingOverlay from '../components/LoadingOverlay';
import apps from '../data/apps.json';

export default function AllApps() {
  const [query, setQuery] = useState('');
  const [searching, setSearching] = useState(false);

  useEffect(() => {
    setSearching(true);
    const timer = setTimeout(() => setSearching(false), 350);
    return () => clearTimeout(timer);
  }, [query]);

  const filteredApps = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return apps;
    return apps.filter((app) => app.title.toLowerCase().includes(term));
  }, [query]);

  return (
    <section className="section container page-apps">
      <div className="section__head">
        <h2>Our All Applications</h2>
        <p>Explore All Apps on the Market developed by us. We code for Millions</p>
      </div>

      <div className="apps-toolbar">
        <p className="apps-toolbar__count">({filteredApps.length}) Apps Found</p>
        <div className="search-wrap">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
            <path d="M20 20L16 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            placeholder="search Apps"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            aria-label="Search apps by title"
          />
        </div>
      </div>

      <div className="apps-results">
        {searching && <LoadingOverlay />}
        {!searching && filteredApps.length === 0 && (
          <p className="empty-message">No App Found</p>
        )}
        {!searching && filteredApps.length > 0 && (
          <div className="apps-grid apps-grid--4">
            {filteredApps.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
