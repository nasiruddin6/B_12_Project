import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Footer from './components/Footer';
import Header from './components/Header';
import LoadingOverlay from './components/LoadingOverlay';
import { useRouteLoading } from './hooks/useRouteLoading';
import AllApps from './pages/AllApps';
import AppDetails from './pages/AppDetails';
import Home from './pages/Home';
import Installation from './pages/Installation';
import NotFound from './pages/NotFound';

function AppContent() {
  const routeLoading = useRouteLoading();

  return (
    <div className="app-layout">
      <Header />
      {routeLoading && <LoadingOverlay />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apps" element={<AllApps />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/app/:id" element={<AppDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
