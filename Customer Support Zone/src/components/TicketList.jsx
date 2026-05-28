import TicketCard from './TicketCard';

function TicketList({ tickets, inProgressIds, onSelectTicket }) {
  return (
    <section id="tickets" className="ticket-list">
      <h2 className="section-title">Customer Tickets</h2>
      {tickets.length === 0 ? (
        <p className="empty-message">All tickets have been resolved. Great work!</p>
      ) : (
        <div className="ticket-list__grid">
          {tickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onSelect={onSelectTicket}
              isActive={inProgressIds.includes(ticket.id)}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default TicketList;
