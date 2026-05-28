function Banner({ inProgressCount, resolvedCount }) {
  return (
    <section className="banner">
      <div className="banner__content">
        <h1 className="banner__heading">Customer Support Dashboard</h1>
        <p className="banner__subheading">
          Track tickets, manage progress, and resolve customer issues efficiently.
        </p>
        <div className="banner__stats">
          <div className="banner__stat">
            <span className="banner__stat-value">{inProgressCount}</span>
            <span className="banner__stat-label">In Progress</span>
          </div>
          <div className="banner__stat">
            <span className="banner__stat-value">{resolvedCount}</span>
            <span className="banner__stat-label">Resolved</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
