import { formatDownloads } from '../utils/format';

export default function InstalledAppCard({ app, onUninstall }) {
  return (
    <article className="installed-card">
      <img src={app.image} alt="" className="installed-card__image" />
      <div className="installed-card__body">
        <h3>{app.title}</h3>
        <div className="installed-card__meta">
          <span>
            <img src="/assets/icon-downloads.png" alt="" width={16} height={16} />
            {formatDownloads(app.downloads)}
          </span>
          <span>
            <img src="/assets/icon-ratings.png" alt="" width={16} height={16} />
            {app.ratingAvg}
          </span>
          <span className="installed-card__size">{app.size} MB</span>
        </div>
      </div>
      <button type="button" className="btn btn--uninstall" onClick={() => onUninstall(app)}>
        Uninstall
      </button>
    </article>
  );
}
