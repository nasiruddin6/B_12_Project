export function formatDownloads(count) {
  if (count >= 1_000_000) {
    const value = count / 1_000_000;
    return `${Number.isInteger(value) ? value : value.toFixed(1)}M`;
  }
  if (count >= 1_000) {
    const value = count / 1_000;
    return `${Number.isInteger(value) ? value : value.toFixed(1)}K`;
  }
  return String(count);
}

export function formatReviews(count) {
  if (count >= 1_000) {
    const value = count / 1_000;
    return `${Number.isInteger(value) ? value : value.toFixed(1)}K`;
  }
  return String(count);
}
