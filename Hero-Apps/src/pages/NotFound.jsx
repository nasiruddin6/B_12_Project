import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="container page-404">
      <img src="/assets/error-404.png" alt="" className="page-404__img" />
      <h1>Oops, page not found!</h1>
      <p>The page you are looking for is not available.</p>
      <Link to="/" className="btn btn--primary">
        Go Back!
      </Link>
    </section>
  );
}
