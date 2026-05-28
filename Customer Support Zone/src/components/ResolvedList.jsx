function ResolvedList({ tickets }) {
  return (
    <section id="resolved" className="resolved-list">
      <h2 className="section-title">Resolved List</h2>
      {tickets.length === 0 ? (
        <p className="empty-message">No resolved tickets yet.</p>
      ) : (
        <ul className="resolved-list__items">
          {tickets.map((ticket) => (
            <li key={ticket.id} className="resolved-list__item">
              <span className="resolved-list__title">{ticket.title}</span>
              <span className="resolved-list__customer">{ticket.customer}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default ResolvedList;
