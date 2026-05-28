import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export function useRouteLoading(duration = 450) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), duration);
    return () => clearTimeout(timer);
  }, [location.pathname, location.search, duration]);

  return loading;
}
