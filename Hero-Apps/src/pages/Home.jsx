import { Link } from 'react-router-dom';
import AppCard from '../components/AppCard';
import apps from '../data/apps.json';
import { APP_STORE_URL, PLAY_STORE_URL } from '../constants';

const topApps = [...apps].sort((a, b) => b.downloads - a.downloads).slice(0, 8);

export default function Home() {
  return (
    <>
      <section className="banner">
        <div className="container banner__content">
          <h1>
            We Build <span className="text-purple">Productive</span> Apps
          </h1>
          <p>
            We are a team of passionate developers who build apps that help you be more
            productive. Our apps are designed to help you focus, stay organized, and get things
            done.
          </p>
          <div className="banner__stores">
            <a href={PLAY_STORE_URL} target="_blank" rel="noreferrer" className="store-btn">
              <span className="store-btn__label">GET IT ON</span>
              <strong>Google Play</strong>
            </a>
            <a href={APP_STORE_URL} target="_blank" rel="noreferrer" className="store-btn">
              <span className="store-btn__label">Download on the</span>
              <strong>App Store</strong>
            </a>
          </div>
        </div>
        <div className="banner__visual">
          <img src="/assets/hero.png" alt="Hero IO apps showcase" />
        </div>
      </section>

      <section className="stats-section">
        <div className="container stats-section__inner">
          <h2>Trusted By Millions, Built For You</h2>
          <div className="stats-grid">
            <article className="stat-card">
              <h3>29.6M</h3>
              <p>Total Downloads</p>
              <span>21% More Than Last Month</span>
            </article>
            <article className="stat-card">
              <h3>906K</h3>
              <p>Total Reviews</p>
              <span>46% More Than Last Month</span>
            </article>
            <article className="stat-card">
              <h3>132+</h3>
              <p>Active Apps</p>
              <span>31 More Will Launch</span>
            </article>
          </div>
        </div>
      </section>

      <section className="section container">
        <div className="section__head">
          <h2>Trending Apps</h2>
          <p>Explore All Trending Apps on the Market developed by us</p>
        </div>
        <div className="apps-grid apps-grid--4">
          {topApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
        <div className="section__action">
          <Link to="/apps" className="btn btn--primary">
            Show All
          </Link>
        </div>
      </section>
    </>
  );
}
