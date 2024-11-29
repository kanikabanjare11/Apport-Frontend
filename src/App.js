import React from 'react';
import KanbanBoard from './components/KanbanBoard';
import useFetchTickets from './hooks/useFetchTickets';
import './styles/App.css'; // Import the CSS for styling

const App = () => {
  // Fetch tickets using the custom hook
  const { tickets, loading } = useFetchTickets();

  if (loading) {
    return <p>Loading tickets...</p>; // Show a loading message while fetching data
  }

  return (
    <div className="App">
      {/* Display KanbanBoard component with the fetched tasks */}
      <KanbanBoard tasks={tickets} />
    </div>
  );
};

export default App;
