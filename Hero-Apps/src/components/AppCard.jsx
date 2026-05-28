import { Link } from 'react-router-dom';
import { formatDownloads } from '../utils/format';

export default function AppCard({ app }) {
  return (
    <Link to={`/app/${app.id}`} className="app-card">
      <div className="app-card__image-wrap">
        <img src={app.image} alt={app.title} className="app-card__image" loading="lazy" />
      </div>
      <h3 className="app-card__title">{app.title}</h3>
      <div className="app-card__meta">
        <span className="app-card__downloads">
          <img src="/assets/icon-downloads.png" alt="" width={16} height={16} />
          {formatDownloads(app.downloads)}
        </span>
        <span className="app-card__rating">
          <img src="/assets/icon-ratings.png" alt="" width={16} height={16} />
          {app.ratingAvg}
        </span>
      </div>
    </Link>
  );
}
