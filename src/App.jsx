import React from 'react';
import KanbanBoard from './components/KanbanBoard';
import useFetchTickets from './hooks/useFetchTickets';

const App = () => {
  const tasks = useFetchTickets();

  return (
    <div className="App">
      <KanbanBoard tasks={tasks} />
    </div>
  );
};

export default App;
