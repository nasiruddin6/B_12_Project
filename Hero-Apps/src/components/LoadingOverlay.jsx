export default function LoadingOverlay() {
  return (
    <div className="loading-overlay" role="status" aria-live="polite" aria-label="Loading">
      <div className="loading-spinner" />
      <p>Loading...</p>
    </div>
  );
}
