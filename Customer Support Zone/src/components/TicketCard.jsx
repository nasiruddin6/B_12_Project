function TicketCard({ ticket, onSelect, isActive }) {
  const priorityClass = `ticket-card__priority ticket-card__priority--${ticket.priority.toLowerCase()}`;

  return (
    <article
      className={`ticket-card ${isActive ? 'ticket-card--active' : ''}`}
      onClick={() => onSelect(ticket)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(ticket);
        }
      }}
      role="button"
      tabIndex={0}
    >
      <div className="ticket-card__header">
        <h3 className="ticket-card__title">{ticket.title}</h3>
        <span className={priorityClass}>{ticket.priority}</span>
      </div>
      <p className="ticket-card__description">{ticket.description}</p>
      <div className="ticket-card__meta">
        <span>
          <strong>Customer:</strong> {ticket.customer}
        </span>
        <span>
          <strong>Status:</strong> {ticket.status}
        </span>
        <span>
          <strong>Created:</strong> {ticket.createdAt}
        </span>
        <span>
          <strong>ID:</strong> #{ticket.id}
        </span>
      </div>
    </article>
  );
}

export default TicketCard;
