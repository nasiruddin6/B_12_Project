import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar';
import Banner from './components/Banner';
import TicketList from './components/TicketList';
import TaskStatus from './components/TaskStatus';
import ResolvedList from './components/ResolvedList';
import Footer from './components/Footer';
import initialTickets from './data/tickets.json';
import './App.css';

function App() {
  const [tickets, setTickets] = useState(initialTickets);
  const [inProgressTasks, setInProgressTasks] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  const inProgressIds = inProgressTasks.map((t) => t.id);

  const handleNewTicket = () => {
    toast.info('New Ticket form would open here (demo).');
  };

  const handleSelectTicket = (ticket) => {
    if (resolvedTickets.some((t) => t.id === ticket.id)) {
      toast.warning('This ticket is already resolved.');
      return;
    }

    if (inProgressIds.includes(ticket.id)) {
      toast.info('This ticket is already in Task Status.');
      return;
    }

    setInProgressTasks((prev) => [...prev, ticket]);
    toast.success(`"${ticket.title}" added to Task Status.`);
  };

  const handleComplete = (ticket) => {
    setInProgressTasks((prev) => prev.filter((t) => t.id !== ticket.id));
    setResolvedTickets((prev) => [...prev, ticket]);
    setTickets((prev) => prev.filter((t) => t.id !== ticket.id));
    toast.success(`"${ticket.title}" marked as resolved!`);
  };

  return (
    <div className="app">
      <Navbar onNewTicket={handleNewTicket} />
      <Banner
        inProgressCount={inProgressTasks.length}
        resolvedCount={resolvedTickets.length}
      />
      <main className="main">
        <TicketList
          tickets={tickets}
          inProgressIds={inProgressIds}
          onSelectTicket={handleSelectTicket}
        />
        <aside className="sidebar">
          <TaskStatus tasks={inProgressTasks} onComplete={handleComplete} />
          <ResolvedList tickets={resolvedTickets} />
        </aside>
      </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} theme="colored" />
    </div>
  );
}

export default App;
