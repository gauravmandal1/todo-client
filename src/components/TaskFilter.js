import React from 'react';
import '../styling/TaskFilter.css';


const TaskFilter = ({ filterTasks, activeFilter }) => {
  const handleFilterChange = (filter) => {
    filterTasks(filter);
  };

  return (
    <div className="task-filter">
      <button
        className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
        onClick={() => handleFilterChange('all')}
      >
        All
      </button>
      <button
        className={`filter-btn ${activeFilter === 'todo' ? 'active' : ''}`}
        onClick={() => handleFilterChange('todo')}
      >
        Todo
      </button>
      <button
        className={`filter-btn ${activeFilter === 'inProgress' ? 'active' : ''}`}
        onClick={() => handleFilterChange('inProgress')}
      >
        In Progress
      </button>
      <button
        className={`filter-btn ${activeFilter === 'complete' ? 'active' : ''}`}
        onClick={() => handleFilterChange('complete')}
      >
        Done
      </button>
    </div>
  );
};

export default TaskFilter;