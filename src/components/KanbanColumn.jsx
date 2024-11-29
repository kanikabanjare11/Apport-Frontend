import React from 'react';
import TicketCard from './TicketCard';

const KanbanColumn = ({ status, tasks }) => (
  <div className="kanban-column">
    <h2>{status}</h2>
    {tasks.map(task => <TicketCard key={task.id} task={task} />)}
  </div>
);

export default KanbanColumn;
