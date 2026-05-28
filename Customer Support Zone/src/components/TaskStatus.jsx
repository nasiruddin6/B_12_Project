function TaskStatus({ tasks, onComplete }) {
  return (
    <section id="task-status" className="task-status">
      <h2 className="section-title">Task Status</h2>
      {tasks.length === 0 ? (
        <p className="empty-message">Click a ticket card to add it here.</p>
      ) : (
        <ul className="task-status__list">
          {tasks.map((ticket) => (
            <li key={ticket.id} className="task-status__item">
              <span className="task-status__title">{ticket.title}</span>
              <button
                type="button"
                className="task-status__complete-btn"
                onClick={() => onComplete(ticket)}
              >
                Complete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default TaskStatus;
