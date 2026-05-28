function Navbar({ onNewTicket }) {
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <span className="navbar__logo" aria-hidden="true">
          CS
        </span>
        <span className="navbar__title">Customer Support Zone</span>
      </div>
      <nav className="navbar__nav">
        <a href="#tickets" className="navbar__link">
          Tickets
        </a>
        <a href="#task-status" className="navbar__link">
          Task Status
        </a>
        <a href="#resolved" className="navbar__link">
          Resolved
        </a>
        <button type="button" className="navbar__btn" onClick={onNewTicket}>
          New Ticket
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
