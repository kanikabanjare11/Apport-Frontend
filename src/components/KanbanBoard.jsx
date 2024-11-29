import React, { useState } from 'react';
import KanbanColumn from './KanbanColumn';
import '../styles/App.css';
import DisplayIcon from '../icons_FEtask/Display.svg'; // Adjust the path as needed

const KanbanBoard = ({ tasks }) => {
  const [groupBy, setGroupBy] = useState('priority');
  const [sortBy, setSortBy] = useState('priority');
  const [showOptions, setShowOptions] = useState(false);

  if (!tasks || tasks.length === 0) {
    return <div>Loading...</div>;
  }

  const groupTasks = (tasks) => {
    const grouped = tasks.reduce((acc, task) => {
      const key = task[groupBy] || 'No Group';
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(task);
      return acc;
    }, {});
    return grouped;
  };

  const sortTasks = (tasks) => {
    const sorted = { ...tasks };
    Object.keys(sorted).forEach(key => {
      sorted[key].sort((a, b) => {
        if (sortBy === 'priority') {
          return b.priority - a.priority;
        } else if (sortBy === 'title') {
          return a.title.localeCompare(b.title);
        }
        return 0;
      });
    });
    return sorted;
  };

  const groupedTasks = groupTasks(tasks);
  const finalTasks = sortTasks(groupedTasks);

  return (
    <div className="kanban-board">
      <div className="top-bar">
        <button className="display-button" onClick={() => setShowOptions(!showOptions)}>
          <img src={DisplayIcon} alt="Display" />
          <span>Display</span>
        </button>
      </div>
      {showOptions && (
        <div className="options">
          <div>
            <label>Grouping:</label>
            <select onChange={(e) => setGroupBy(e.target.value)} value={groupBy}>
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div>
            <label>Ordering:</label>
            <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
      <div className="columns">
        {Object.keys(finalTasks).map(group => (
          <KanbanColumn key={group} status={group} tasks={finalTasks[group]} />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
