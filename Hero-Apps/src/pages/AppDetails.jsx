import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import RatingsChart from '../components/RatingsChart';
import apps from '../data/apps.json';
import { formatDownloads, formatReviews } from '../utils/format';
import { installApp, isAppInstalled } from '../utils/storage';

export default function AppDetails() {
  const { id } = useParams();
  const app = apps.find((item) => item.id === Number(id));
  const [installed, setInstalled] = useState(false);

  useEffect(() => {
    if (app) {
      setInstalled(isAppInstalled(app.id));
    }
  }, [app]);

  if (!app) {
    return (
      <section className="container not-found-app">
        <img src="/assets/App-Error.png" alt="" className="not-found-app__img" />
        <h1>OPPS!! APP NOT FOUND</h1>
        <p>
          The App you are requesting is not found on our system. please try another apps
        </p>
        <Link to="/apps" className="btn btn--primary">
          Go Back!
        </Link>
      </section>
    );
  }

  const handleInstall = () => {
    if (installed) return;
    installApp(app);
    setInstalled(true);
    toast.success(`${app.title} installed successfully!`);
  };

  return (
    <section className="container app-details">
      <div className="app-details__hero">
        <img src={app.image} alt={app.title} className="app-details__image" />
        <div className="app-details__info">
          <h1>{app.title}</h1>
          <p className="app-details__company">
            Developed by <span>{app.companyName}</span>
          </p>
          <div className="app-details__stats">
            <span>
              <img src="/assets/icon-downloads.png" alt="" width={20} height={20} />
              {formatDownloads(app.downloads)}
            </span>
            <span>
              <img src="/assets/icon-ratings.png" alt="" width={20} height={20} />
              {app.ratingAvg}
            </span>
            <span>
              <img src="/assets/icon-review.png" alt="" width={20} height={20} />
              {formatReviews(app.reviews)}
            </span>
          </div>
          <button
            type="button"
            className="btn btn--install"
            onClick={handleInstall}
            disabled={installed}
          >
            {installed ? `Installed` : `Install Now (${app.size} MB)`}
          </button>
        </div>
      </div>

      <hr className="divider" />

      <div className="app-details__section">
        <h2>Ratings</h2>
        <RatingsChart ratings={app.ratings} />
      </div>

      <hr className="divider" />

      <div className="app-details__section">
        <h2>Description</h2>
        <p>{app.description}</p>
      </div>
    </section>
  );
}
