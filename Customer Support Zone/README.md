# Customer Support Zone

A React-based Customer Support Zone to display customer tickets, track progress, and mark them as resolved. Built with Vite, React, and React-Toastify.

## Live Features

- **Navbar** — Logo on the left; Tickets, Task Status, Resolved links and New Ticket button on the right
- **Banner** — Linear gradient with In Progress and Resolved counts
- **Customer Tickets** — 12 tickets from JSON in a 2-column card grid
- **Task Status** — Click a card to add it; Complete moves it to resolved
- **Resolved List** — Shows completed tickets
- **Footer** — Brand, links, and copyright
- **Responsive** — Mobile-friendly layout
- **React-Toastify** — Toast notifications instead of browser alerts

## Getting Started

```bash
cd "Customer Support Zone"
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

---

## React Concepts (Assignment Questions)

### What is JSX, and why is it used?

**JSX** (JavaScript XML) is a syntax extension for JavaScript that lets you write HTML-like markup inside React components. It is compiled (by tools like Vite/Babel) into `React.createElement()` calls.

JSX is used because it makes UI code easier to read and write—you can describe structure visually instead of nesting many function calls. It also keeps markup, logic, and styles organized in one component file.

### What is the difference between State and Props?

| | **State** | **Props** |
|---|-----------|-----------|
| Owner | Managed inside the component | Passed from a parent component |
| Mutability | Can be updated with `setState` / `useState` | Read-only for the child |
| Purpose | Data that changes over time (e.g. ticket list) | Configuration and data flow down the tree |

**Example in this project:** `tickets` and `inProgressTasks` are **state** in `App.jsx`. `onSelectTicket` and `tickets` passed to `TicketList` are **props**.

### What is the useState hook, and how does it work?

`useState` is a React Hook that adds local state to a function component.

```jsx
const [tickets, setTickets] = useState(initialTickets);
```

- The first value (`tickets`) is the current state.
- The second value (`setTickets`) is a function to update it.
- Passing a new value (or updater function) to the setter triggers a re-render with the updated state.

### How can you share state between components in React?

Common approaches:

1. **Lift state up** — Store state in the nearest common parent and pass it down via props (used in this app: `App` holds tickets and handlers, children receive them).
2. **Context API** — `createContext` + `useContext` for deeply nested trees without prop drilling.
3. **External stores** — Redux, Zustand, etc., for larger apps.

This project uses **lifting state up** in `App.jsx`.

### How is event handling done in React?

React uses **camelCase** event names and passes **functions** as handlers:

```jsx
<button onClick={() => onComplete(ticket)}>Complete</button>
<article onClick={() => onSelect(ticket)}>...</article>
```

- Use `onClick`, `onChange`, `onSubmit`, etc.—not `onclick`.
- Handlers receive a synthetic event object when needed (`e.preventDefault()`).
- Child components call parent callbacks passed as props (`onSelectTicket`, `onComplete`).

---

## Project Structure

```
src/
├── App.jsx              # Main state & layout
├── App.css              # Component styles
├── components/
│   ├── Navbar.jsx
│   ├── Banner.jsx
│   ├── TicketCard.jsx
│   ├── TicketList.jsx
│   ├── TaskStatus.jsx
│   ├── ResolvedList.jsx
│   └── Footer.jsx
└── data/
    └── tickets.json     # 12 sample tickets
```

## Tech Stack

- React 19
- Vite 8
- React-Toastify 11
